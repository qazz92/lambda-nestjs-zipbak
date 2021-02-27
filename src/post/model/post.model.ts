import { CreatePostInput } from "./create-post.input";
import {ApiProperty} from "@nestjs/swagger";

export type PostKey = {
    id: string;
};

export class Post extends CreatePostInput {
    @ApiProperty()
    id: string;

    @ApiProperty()
    userId: string;

    @ApiProperty()
    createdAt: number;
}
