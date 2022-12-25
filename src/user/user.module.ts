import { Module,forwardRef, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { User } from './entities/user.entity';
import { AuthModule} from '../auth/auth.module'
import { PostEntity } from '../post/entities/post.entity'
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [TypeOrmModule.forFeature([User]), 
  forwardRef(()=>AuthModule)],     //Понять что делаю не так? forwardRef(() => AuthModule
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService,TypeOrmModule]
})
export class UserModule {}
