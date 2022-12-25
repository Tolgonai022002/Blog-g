import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsString,IsNotEmpty, MaxLength, IsNumber } from 'class-validator';


export class UpdateUserDto  {
    // @ApiProperty()
    // @IsNumber()
    // id: number

    @ApiProperty()
    @IsNotEmpty()
    fullname: string


    @ApiProperty()
    @IsNotEmpty()
    nickname : string


    @ApiProperty()
    @IsNotEmpty()
    password :  string

    @ApiProperty()
    @IsNotEmpty()
    login: string

    @ApiProperty()
    email : string

    // @ApiProperty({description: 'Идентификатор пользователя'})
    // userId: number  
    
    // @ApiProperty()
    // createPageTime: Date

    // @ApiProperty()
    // avatar: string

}
