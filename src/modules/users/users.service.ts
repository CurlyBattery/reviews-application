import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { AppException } from '@webxsid/nest-exception';
import { Password } from '@app/password-lib';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private repository: UsersRepository) {}

  async createUser(dto: CreateUserDto) {
    const existsUser = await this.repository.getUsers({
      where: { email: dto.email },
    });
    if (existsUser && existsUser.length > 0) {
      throw new AppException('E002');
    }

    const hashPassword = await Password.hashPassword(dto.password);

    const user = await this.repository.createUser({
      data: {
        hashPassword: hashPassword,
        email: dto.email,
        username: dto.username,
        avatar: dto.avatar,
      },
    });

    return user;
  }

  async getUsers() {
    const users = await this.repository.getUsers({});
    return users;
  }

  async updateUser(id: number, dto: UpdateUserDto) {
    const existsUser = await this.repository.getUsers({ where: { id } });
    if (!existsUser || existsUser.length === 0) {
      throw new AppException('E001');
    }
    console.log(dto);

    const updatedUser = await this.repository.updateUser({
      where: {
        id,
      },
      data: {
        ...dto,
      },
    });
    if (!updatedUser) {
      throw new AppException('E003');
    }
    return updatedUser;
  }
}
