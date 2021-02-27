import { Injectable } from '@nestjs/common';
import {InjectModel, Model} from "nestjs-dynamoose";
import {Reply, ReplyKey} from "./model/reply.model";
import * as uuid from 'uuid';
import {SortOrder} from "dynamoose/dist/General";
import {ListReplyInput} from "./model/list-reply.input";
import {CreateReplyInput} from "./model/create-reply.input";

@Injectable()
export class ReplyService {
    constructor(
        @InjectModel('reply')
        private readonly model : Model<Reply, ReplyKey>
    ) {}

    async create(input : CreateReplyInput, user : any) {
        return await this.model.create(
            {
                ...input,
                id: uuid.v4(),
                userId: user.id,
                createdAt: new Date().getTime()
            });
    }

    async list(input : ListReplyInput) {
        const countQuery = await this.model
            .query("postId")
            .eq(input.postId).count().exec();

        const list = this.model
            .query("postId")
            .eq(input.postId)
            .limit(input.limit)
            .sort(SortOrder.descending);

        if (input.lastKey) {
            list.startAt(JSON.parse(input.lastKey));
        }

        const listQuery = await list.exec();

        return {
            list: listQuery,
            lastKey: listQuery.lastKey,
            count: countQuery.count,
        };
    }

}
