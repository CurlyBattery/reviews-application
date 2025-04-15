import { Controller, Get, Patch, Param, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }

  @Patch(':id')
  updateUser(@Param('id', ParseIntPipe) id: number, dto: any) {
    return this.usersService.updateUser(id, dto);
  }
}
