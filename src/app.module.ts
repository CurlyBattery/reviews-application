import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { APP_FILTER } from '@nestjs/core';
import { AppExceptionFilter } from '@webxsid/nest-exception';

@Module({
  imports: [UsersModule],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AppExceptionFilter,
    },
  ],
})
export class AppModule {}
