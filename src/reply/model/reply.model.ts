import { CreateReplyInput } from "./create-reply.input";
import {ApiProperty} from "@nestjs/swagger";

export class ReplyKey {
    id: string;
}

export class Reply extends CreateReplyInput {
    @ApiProperty()
    id: string;

    @ApiProperty()
    userId: string;

    @ApiProperty()
    createdAt: number;
}
