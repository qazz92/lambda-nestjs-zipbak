import { CreateUserInput } from "./create-user.input";
import {ApiProperty} from "@nestjs/swagger";

export type UserKey = {
    id: string;
};

export class User extends CreateUserInput {
    @ApiProperty()
    id: string;

    @ApiProperty()
    createdAt: number;
}
