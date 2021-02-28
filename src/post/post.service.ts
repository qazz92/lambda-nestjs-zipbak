import {Injectable} from '@nestjs/common';
import {InjectModel, Model} from "nestjs-dynamoose";
import {Post, PostKey} from "./model/post.model";
import {CreatePostInput} from "./model/create-post.input";
import * as uuid from 'uuid';
import {FindPostInput} from "./model/find-post.input";
import {ListPostInput} from "./model/list-post.input";
import {SortOrder} from "dynamoose/dist/General";

@Injectable()
export class PostService {
    constructor(
        @InjectModel('post')
        private readonly model: Model<Post, PostKey>) {
    }

    getRandomInt(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
    }

    async create(input: CreatePostInput, user: any) {
        const rand = this.getRandomInt(1,30)
        return await this.model.create(
            {
                ...input,
                id: uuid.v4(),
                profile: `profile/profile${rand}.png`,
                userId: user.id,
                createdAt: new Date().getTime()
            });
    }

    async find(input: FindPostInput) {
        return await this.model.get(input.id);
    }

    async list(input: ListPostInput) {
        const count = await this.model.query("postType").eq("all").count().exec();

        const query = this.model
            .query("postType")
            .eq("all")
            .limit(input.limit)
            .sort(SortOrder.descending);

        if (input.lastKey) {
            query.startAt(JSON.parse(input.lastKey));
        }

        const result = await query.exec();

        return {
            list: result,
            lastKey: result.lastKey,
            count: count.count,
        };
    }
}
