import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { RegisterDto } from './dto/register.dto';
import { LocalAuthenticationGuard } from './guards/local.guard';
import RequestWithUser from './requests/user.request';
import { Response } from 'express';
import JwtAuthenticationGuard from './guards/jwt.guard';
import JwtRefreshGuard from './guards/refresh.guard';

@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @Post('register')
  async register(@Body() registrationData: RegisterDto) {
    return this.authenticationService.register(registrationData);
  }

  @HttpCode(200)
  @UseGuards(LocalAuthenticationGuard)
  @Post('log-in')
  async logIn(
    @Req() request: RequestWithUser,
    @Res({ passthrough: true }) response: Response,
  ) {
    const user = request.user;
    const { accessToken, jwtExp: maxAgeAccessToken } =
      this.authenticationService.getJwtAccessToken(user.id);
    response.cookie('Authentication', accessToken, {
      maxAge: maxAgeAccessToken,
      httpOnly: true,
      secure: false,
      path: '/',
    });

    const { refreshToken, jwtExp: maxAgeRefreshToken } =
      await this.authenticationService.getJwtRefreshToken(user.id);
    response.cookie('Refresh', refreshToken, {
      maxAge: maxAgeRefreshToken,
      httpOnly: true,
      secure: false,
      path: '/',
    });
    return {
      message: 'success',
    };
  }

  @UseGuards(JwtRefreshGuard)
  @Get('refresh')
  async refresh(
    @Req() request: RequestWithUser,
    @Res({ passthrough: true }) response: Response,
  ) {
    const user = request.user;
    const { accessToken, jwtExp: maxAgeAccessToken } =
      this.authenticationService.getJwtAccessToken(user.id);
    response.cookie('Authentication', accessToken, {
      maxAge: maxAgeAccessToken,
      httpOnly: true,
      secure: false,
      path: '/',
    });
    const { refreshToken, jwtExp: maxAgeRefreshToken } =
      await this.authenticationService.getJwtRefreshToken(user.id);
    response.cookie('Refresh', refreshToken, {
      maxAge: maxAgeRefreshToken,
      httpOnly: true,
      secure: false,
      path: '/',
    });

    return {
      message: 'success',
    };
  }

  @UseGuards(JwtAuthenticationGuard)
  @Post('log-out')
  async logOut(
    @Req() request: RequestWithUser,
    @Res({ passthrough: true }) response: Response,
  ) {
    const user = request.user;
    await this.authenticationService.removeJwtRefreshToken(user.id);
    response.cookie('Authentication', '', {
      maxAge: 0,
      httpOnly: true,
      secure: false,
      path: '/',
    });
    response.cookie('Refresh', '', {
      maxAge: 0,
      httpOnly: true,
      secure: false,
      path: '/',
    });
    return {
      message: 'success',
    };
  }

  @UseGuards(JwtAuthenticationGuard)
  @Get()
  authenticate(@Req() request: RequestWithUser) {
    const user = request.user;
    user.hashPassword = undefined;
    return user;
  }
}
