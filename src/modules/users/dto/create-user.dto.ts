import { User } from '../../../../generated/prisma';

export class CreateUserDto {
  email: User[`email`];
  username: User[`username`];
  hashPassword: User[`hashPassword`];
  avatar: User[`avatar`];
  role?: User[`role`];
}
