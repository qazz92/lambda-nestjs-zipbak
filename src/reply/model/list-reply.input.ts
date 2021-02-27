import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty, IsOptional, IsString} from "class-validator";

export class ListReplyInput {
    @ApiProperty()
    @IsNotEmpty()
    limit: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    postId: string;

    @ApiProperty({
        required: false,
        description: "list api 의 받은 lastKey를 string 으로"
    })
    @IsOptional()
    lastKey?: string;
}
