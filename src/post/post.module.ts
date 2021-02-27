import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import {PostSchema} from "./schema/post.schema";
import {DynamooseModule} from "nestjs-dynamoose";

@Module({
  imports: [
    DynamooseModule.forFeature([
      {
        name: 'post',
        schema: PostSchema,
      },
    ]),
  ],
  controllers: [PostController],
  providers: [PostService]
})
export class PostModule {}
