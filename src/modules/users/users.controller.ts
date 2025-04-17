import {
  Controller,
  Get,
  Patch,
  Param,
  ParseIntPipe,
  Post,
  Body,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }

  @Patch(':id')
  updateUser(@Param('id', ParseIntPipe) id: number, dto: any) {
    return this.usersService.updateUser(id, dto);
  }
}
