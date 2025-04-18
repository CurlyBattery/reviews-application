import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { RegisterDto } from './dto/register.dto';
import { Scrypt } from '@app/hash';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { config } from 'rxjs';

export interface TokenPayload {
  userId: number;
}

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  public async register(registrationData: RegisterDto) {
    const hashPassword = await Scrypt.hash(registrationData.password, 16);
    const createdUser = await this.usersService.createUser({
      ...registrationData,
      hashPassword,
    });
    createdUser.hashPassword = undefined;
    return createdUser;
  }

  public async getAuthenticatedUser(email: string, hashPassword) {
    try {
      const [user] = await this.usersService.getUserByEmail(email);
      await this.verifyPassword(hashPassword, user.hashPassword);
      user.hashPassword = undefined;
      return user;
    } catch (error) {
      console.error(error);
      throw new BadRequestException('Wrong credentials provided');
    }
  }

  private async verifyPassword(plainTextPassword, hashedPassword) {
    const isPasswordMatching = await Scrypt.compare(
      hashedPassword,
      plainTextPassword,
    );
    if (!isPasswordMatching) {
      throw new BadRequestException('Wrong credentials provided');
    }
  }

  public getJwtAccessToken(userId: number) {
    const payload: TokenPayload = { userId };
    const maxAge = this.configService.get('JWT_ACCESS_TOKEN_EXPIRATION_TIME');
    return {
      accessToken: this.jwtService.sign(payload, {
        secret: this.configService.get('JWT_ACCESS_TOKEN_SECRET'),
        expiresIn: `${maxAge / 1000}s`,
      }),
      jwtExp: maxAge,
    };
  }

  public async getJwtRefreshToken(userId: number) {
    const payload: TokenPayload = { userId };
    const maxAge = this.configService.get('JWT_REFRESH_TOKEN_EXPIRATION_TIME');
    const refreshToken = this.jwtService.sign(payload, {
      secret: this.configService.get('JWT_REFRESH_TOKEN_SECRET'),
      expiresIn: `${maxAge / 1000}s`,
    });
    await this.usersService.setCurrentRefreshToken(refreshToken, userId);
    return {
      refreshToken: refreshToken,
      jwtExp: maxAge,
    };
  }

  async removeJwtRefreshToken(userId: number) {
    await this.usersService.removeRefreshToken(userId);
  }
}
