import {IsNotEmpty, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateUserInput {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    socialId: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    socialType: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string;
}
