import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from '../modules/users/users.service';

@Controller('api')
export class ApiController {
  constructor(private readonly usersService: UsersService) {}

  @Post('user')
  async createUser(
    @Body()
    data: {
      email: string;
      username: string;
      hashPassword: string;
      avatar: string;
    },
  ) {
    const { email, username, hashPassword, avatar } = data;
    return this.usersService.createUser({
      email,
      username,
      hashPassword,
      avatar,
    });
  }

  @Get('users')
  getUsers() {
    return this.usersService.getUsers();
  }
}
