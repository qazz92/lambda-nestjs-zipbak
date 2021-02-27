import { Module } from '@nestjs/common';
import { ReplyController } from './reply.controller';
import { ReplyService } from './reply.service';
import {DynamooseModule} from "nestjs-dynamoose";
import {ReplySchema} from "./schema/reply.schema";

@Module({
  imports: [
    DynamooseModule.forFeature([
      {
        name: 'reply',
        schema: ReplySchema,
      },
    ]),
  ],
  controllers: [ReplyController],
  providers: [ReplyService]
})
export class ReplyModule {}
