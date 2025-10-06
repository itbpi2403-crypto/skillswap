import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { SkillsModule } from './skills/skills.module';
import { RequestsModule } from './requests/requests.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    UsersModule,
    SkillsModule,
    RequestsModule,
  ],
})
export class AppModule {}
