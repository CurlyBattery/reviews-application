import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { AppException } from '@webxsid/nest-exception';
import { Password } from '@app/password-lib';
import { UpdateUserDto } from './dto/update-user.dto';
import { SearchUsersDto } from './dto/search-users.dto';
import { Users, UsersSelect } from './entity/users.select';

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

    return await this.repository.createUser({
      data: {
        hashPassword: hashPassword,
        email: dto.email,
        username: dto.username,
        avatar: dto.avatar,
      },
    });
  }

  async search(searchDto: SearchUsersDto): Promise<Users[]> {
    const where = this.transformQueryToWhere(searchDto);
    return await this.repository.getUsers({
      where,
      select: UsersSelect,
    });
  }

  transformQueryToWhere(searchDto: SearchUsersDto) {
    return {
      OR: [
        { id: searchDto.id! },
        { email: searchDto.email! },
        { username: searchDto.username! },
        { role: searchDto.role! },
      ],
    };
  }

  async updateUser(id: number, dto: UpdateUserDto) {
    const existsUser = await this.repository.getUsers({ where: { id } });
    if (!existsUser || existsUser.length === 0) {
      throw new AppException('E001');
    }

    const updatedUser = await this.repository.updateUser({
      where: {
        id,
      },
      data: dto,
    });
    if (!updatedUser) {
      throw new AppException('E003');
    }
    return updatedUser;
  }

  async delete(id: number): Promise<Users> {
    const existsUser = await this.repository.getUsers({ where: { id } });
    if (!existsUser || existsUser.length === 0) {
      throw new AppException('E001');
    }

    const deletedUser = await this.repository.deleteUser({
      where: {
        id,
      },
      select: UsersSelect,
    });
    if (!deletedUser) {
      throw new AppException('E003');
    }
    return deletedUser;
  }
}
