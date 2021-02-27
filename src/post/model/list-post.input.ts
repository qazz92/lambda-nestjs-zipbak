import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty, IsOptional} from "class-validator";

export class ListPostInput {
    @ApiProperty({
        description: "갯수"
    })
    @IsNotEmpty()
    limit: number;

    @ApiProperty({
        required: false,
        description: "list api 의 받은 lastKey를 string 으로"
    })
    @IsOptional()
    lastKey?: string;
}
