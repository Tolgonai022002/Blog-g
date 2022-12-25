import {HttpException, Injectable,HttpStatus, BadRequestException } from '@nestjs/common';
import { CreatePostDto , UpdatePostDto} from './dto/create-update.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostEntity } from './entities/post.entity';
import { identity } from 'rxjs';
import { doc } from 'prettier';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity) private readonly postRepo: Repository<PostEntity>,
  ) {} 
/*
  async create(createPostDto: CreatePostDto): Promise<any> {
    const title = createPostDto;
    if(!title){
      throw new HttpException('NOT FOUND!', HttpStatus.BAD_REQUEST);
    }
    const docs = await this.postRepository.findOne({where:title,})
    if(docs){
      throw new HttpException('Not found probably', HttpStatus.BAD_REQUEST)
    }
    
  }
*/
// создает новый пост
  async createNewPost(createPostDto: CreatePostDto){
    return await this.postRepo.save(createPostDto)
  }
// находит все посты юзера
  async findAllUsersPosts(id: number) {
    const post = await this.postRepo.findAndCount({where:{}})
    const countOfPosts = await this.postRepo.findAndCount({where:{id:id}})
    if(!post.length){
      throw new BadRequestException('You have no posts!')
    }
    return post
  }
// находит только один пост юзера
  async findOneUsersPost(id: number) {
    let post1 =  await this.postRepo.findOne({where:{id:id}})
    if(!post1){
      throw new BadRequestException("This post was not found!")
    }
    return post1
  }
// находит один пост юзера и апдейтит
  async update(id: number, updatePostDto: UpdatePostDto) {
    let onePost = await this.postRepo.findOne({where:{id:id}})
    Object.assign(onePost,updatePostDto)
    return await this.postRepo.save(onePost)
  }
// находит по айдишнику и удаляет его
  async removePOstById( id:number) {
    let post = await this.postRepo.findOne({where:{id:id}})
    await this.postRepo.remove(post)
  }

// посчитать лайки за пост
  async postsLikes(id: number){
    const postLike = await this.postRepo.findOne({where:{id:id}})
    postLike.postLikes++
    return this.postRepo.save(postLike)
  }

// посчитать дислайки за пост
  async postsDislikes(id: number){
    const postDislike = await this.postRepo.findOne({where:{id:id}})
    postDislike.postDislikes++
    return this.postRepo.save(postDislike)
  }


}
