import { Controller, Get, Post, Body, Patch,UploadedFile, Param, UseInterceptors, Delete , Request, UseGuards} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto,UpdatePostDto } from './dto/create-update.dto';
import { PostEntity } from './entities/post.entity';
import { BadRequestException, NotFoundException } from '@nestjs/common/exceptions';
import { JwtAuthGuards } from '../auth/guards/jwt-auth.guard'
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiOperation, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { Put } from '@nestjs/common/decorators';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('POSTS')
@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}




//   // get all posts


  @ApiOperation({description: 'To get all your posts'})
  @UseGuards(JwtAuthGuards)
  @Get('all-your-posts')
  async getAllUsersPosts(@Request() req){
    return await this.postService.findAllUsersPosts(req.user.userId)

  }

  @ApiOperation({description:"Find all user's posts"})
  @UseGuards(JwtAuthGuards)
  @Get('postId')
  async findOneUSersPost(@Param('postId')id: number){
    return await this.postService.findOneUsersPost(id)
    
  }


  @ApiOperation({description:'To find and count likes of posts'})
  @UseGuards(JwtAuthGuards)
  @Post('likes')
  async countLikes(@Param('postId') id: number){
    return await this.postService.postsLikes(id)
  }


  @ApiOperation({description:'To find and count dislikes of posts'})
  @UseGuards(JwtAuthGuards)
  @Post('dislikes')
  async countDislikes(@Param('postId') id: number){
    return await this.postService.postsDislikes(id)
  }


//   @ApiOperation({summary: 'Get one post'})
//   @UseGuards(JwtAuthGuard)
//   @Get(':id')
//   async findOne(@Param('id') id: number): Promise<any> {
//     // find the post with this id
//     const post = await this.postService.findOne(+id);
//     if(!post){
//       throw new  NotFoundException('NOT FOUND!')
//     }
//     return post
// }
// // ========================================================================================



//   @UseGuards(JwtAuthGuard('jwt'))                    // надо написать jwt и после раскоментирую 
//   @Post()
//   async create(@Body() createPostDto: CreatePostDto, @Request() req) {
//     return await this.postService.create(createPostDto : CreatePostDto);
//     // return await this.postService.create(post, req.user.id);     // или этот вариант или тот что выше указан
//   }

  

// // ========================================================================================
  





// @UseGuards(JwtAuthGuard('jwt'))        // надо написать jwt и после раскоментирую 
// @Patch(':id')
//   async update(@Param('id') id: number, 
//   @Body() post: CreatePostDto,
//   @Request() req,): Promise<PostEntity> {
//     const { numberOfAffectedRows, updatedPost } = await this.postService.update(
//       id,
//       post
//     );

//     if (numberOfAffectedRows === 0) {
//       throw new NotFoundException("This Post doesn't exist");
//     }
//     return updatedPost;
//   }

@ApiOperation({summary: 'Change/Update the post'})
@UseGuards(JwtAuthGuards)
@Put(':id')
async changeOnePost(@Param('id')id:number, 
              @Body() changePostDto: UpdatePostDto){
                return await this.postService.update(id,changePostDto)
}




// // ========================================================================================



//   @UseGuards(JwtAuthGuard('jwt'))        // надо написать jwt и после раскоментирую   
//   @Delete(':id')
//   async remove(@Param('id') id: number, @Request() req) {
//     const deleted = await this.postService.remove.(id, req.user.id)
//     if(deleted === 0){
//       throw new NotFoundException("This Post doesn't exist");
//     }
//     return 'Successfully deleted';
//   }

@ApiOperation({summary: 'Delete the post by ID'})
@UseGuards(JwtAuthGuards)
@Delete('postId')
async remove(@Param('id')id:number){
  await this.postService.removePOstById(id)
}
}
