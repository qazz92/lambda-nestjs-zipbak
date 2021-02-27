import { Injectable } from '@nestjs/common';
import {InjectModel, Model} from "nestjs-dynamoose";
import {User, UserKey} from "./model/user.model";
import * as uuid from 'uuid';
import {CreateUserInput} from "./model/create-user.input";

@Injectable()
export class UserService {

    constructor(
        @InjectModel('user')
        private readonly model : Model<User, UserKey>
    ) {}

    async create(input : CreateUserInput) {
        return await this.model.create(
            {
                ...input,
                id: uuid.v4(),
                createdAt: new Date().getTime()
            }
        );
    }

    async find(id : string) {
        return await this.model.query('socialId').eq(id).exec();
    }
}
