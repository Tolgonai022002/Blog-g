import { ApiAcceptedResponse, ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";


export class CreateProfileDto{
    @ApiProperty()
    @IsNumber()
    userID: number

    @ApiProperty()
    @IsString()
    title: string


    @ApiProperty()
    @IsString()
    description: string
}
