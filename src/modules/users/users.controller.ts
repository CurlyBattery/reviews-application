import {
  Controller,
  Get,
  Patch,
  Param,
  ParseIntPipe,
  Post,
  Body,
  Query,
  Delete,
  UseGuards,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { SearchUsersDto } from './dto/search-users.dto';
import RoleGuard from '../authentication/guards/role.guard';
import { Permission, Role } from '../../../generated/prisma';
import JwtAuthenticationGuard from '../authentication/guards/jwt.guard';
import PermissionGuard from '../authentication/guards/permissions.guard';

@Controller('users')
@UseInterceptors(ClassSerializerInterceptor)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers(@Query() searchDto: SearchUsersDto) {
    return this.usersService.search(searchDto);
  }

  @Patch(':id')
  updateUser(@Param('id') id: number, @Body() dto: UpdateUserDto) {
    return this.usersService.updateUser(+id, dto);
  }

  @Delete(':id')
  @UseGuards(PermissionGuard(Permission.DeleteYourProfile))
  deleteUser(@Param('id') id: number) {
    return this.usersService.delete(id);
  }
}
