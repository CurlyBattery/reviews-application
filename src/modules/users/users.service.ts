import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { CreateUserDto } from './dto/create-user.dto';
import {
  AppException,
  ExceptionRegistryService,
} from '@webxsid/nest-exception';

@Injectable()
export class UsersService {
  constructor(private repository: UsersRepository) {}

  async createUser(dto: CreateUserDto) {
    const user = await this.repository.createUser({
      data: dto,
    });

    return user;
  }

  async getUsers() {
    const users = await this.repository.getUsers({});
    return users;
  }

  async updateUser(id: number, dto: any) {
    const existsUser = await this.repository.getUsers({ where: { id } });
    if (!existsUser || existsUser.length === 0) {
      throw new AppException('E001');
    }
  }
}
