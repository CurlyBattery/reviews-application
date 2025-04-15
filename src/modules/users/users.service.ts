import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { User } from '../../../generated/prisma';

@Injectable()
export class UsersService {
  constructor(private repository: UsersRepository) {}

  async createUser(params: {
    email: User[`email`];
    username: User[`username`];
    hashPassword: User[`hashPassword`];
    avatar: User[`avatar`];
  }) {
    const { email, username, hashPassword, avatar } = params;

    const user = await this.repository.createUser({
      data: {
        email,
        username,
        hashPassword,
        avatar,
      },
    });

    return user;
  }

  async getUsers() {
    const users = await this.repository.getUsers({});
    return users;
  }
}
