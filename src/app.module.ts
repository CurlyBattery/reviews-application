import { Module, ValidationPipe } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { APP_FILTER, APP_PIPE } from '@nestjs/core';
import { AppExceptionFilter } from '@webxsid/nest-exception';

@Module({
  imports: [UsersModule],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AppExceptionFilter,
    },
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        transform: true,
        transformOptions: { enableImplicitConversion: true },
      }),
    },
  ],
})
export class AppModule {}
