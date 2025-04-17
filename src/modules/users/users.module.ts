import { Module } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { PrismaModule } from '../../database/prisma.module';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { AppExceptionModule } from '@webxsid/nest-exception';

@Module({
  imports: [PrismaModule],
  controllers: [UsersController],
  providers: [UsersRepository, UsersService],
  exports: [UsersRepository, UsersService],
})
export class UsersModule {}
