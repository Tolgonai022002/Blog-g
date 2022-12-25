import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreatePostDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    postTitle?: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    postDescription?: string

    // @ApiProperty()
    // postImage: string                //может придется поменять на [any]

   @ApiProperty()
   @IsNotEmpty()
   @IsNumber()
   userID: number

   @ApiProperty()
   @IsNumber()
   postLikes: number

   @ApiProperty()
   @IsNumber()
    postDislikes: number
 

}



export class UpdatePostDto extends PartialType(CreatePostDto) {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    postTitle?: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    postDescription?: string

    // @ApiProperty()
    // postImage: string                //может придется поменять на [any]

    @ApiProperty()
    @IsNumber()
     postLikes: number

    @ApiProperty()
    @IsNumber()
    postDislikes: number
}
