import { ApiAcceptedResponse, ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class UpdateProfileDto{
    @ApiProperty()
    @IsString()
    title: string


    @ApiProperty()
    @IsString()
    description: string
}