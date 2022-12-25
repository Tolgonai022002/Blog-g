import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DB_CONFIG } from './utils/db_config';
import { ProfileModule } from './profile/profile.module';


@Module({
  imports:[TypeOrmModule.forRoot(DB_CONFIG),AuthModule,UserModule,PostModule,ProfileModule]
})
export class AppModule {}
