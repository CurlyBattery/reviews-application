import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { RegisterDto } from './dto/register.dto';
import { Password } from '@app/password-lib';
import { AppException } from '@webxsid/nest-exception';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

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
    const hashPassword = await Password.hashPassword(registrationData.password);
    try {
      const createdUser = await this.usersService.createUser({
        ...registrationData,
        hashPassword,
      });
      createdUser.hashPassword = undefined;
      return createdUser;
    } catch (error) {
      console.error(error);
      throw new BadRequestException('Something went wrong');
    }
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
    const isPasswordMatching = await Password.comparePassword(
      hashedPassword,
      plainTextPassword,
    );
    if (!isPasswordMatching) {
      throw new BadRequestException('Wrong credentials provided');
    }
  }

  public getCookieWithJwtToken(userId: number) {
    const payload: TokenPayload = { userId };
    const token = this.jwtService.sign(payload);
    return `Authentication=${token}`;

    // return `Authentication=${token}: HttpOnly; Path=/; Max-Age=${this.configService.get('JWT_EXPIRATION_TIME')}`;
  }

  public getCookieForLogOut() {
    return `Authentication=; HttpOnly; Path=/; Max-Age=0`;
  }
}
