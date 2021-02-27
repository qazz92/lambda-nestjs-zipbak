import { PostKey } from "./post.model";
import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty, IsString} from "class-validator";
export class FindPostInput {

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    id: PostKey;
}
