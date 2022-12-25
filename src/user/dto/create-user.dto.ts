import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateUserDto {
    // @ApiProperty()
    // @IsNumber()
    // id: number

    @ApiProperty({description:'Имя и Фамилия пользователя'})
    @IsNotEmpty()
    fullname: string

    @ApiProperty({description: 'Никнэйм пользователя'})
    @IsNotEmpty({message: "Пожалуйста, введите имя пользователя"})
    nickname : string

    @ApiProperty({description:"Пароль"})
    @IsNotEmpty({message: "Пожалуйста, введите пароль"})
    password :  string

    @ApiProperty()
    @IsNotEmpty()
    login: string

    @ApiProperty()
    email:string

    // @ApiProperty({description: "Почтовый ящик пользователя"})
    // readonly email : string

    // @ApiProperty({description: 'Идентификатор пользователя'})
    // userId: number  
    
    // @ApiProperty()
    // createPageTime: Date

    // @ApiProperty()
    // avatar: string


    // @ApiProperty()
    // @IsString()
    // passwordSalt: null | string
}
