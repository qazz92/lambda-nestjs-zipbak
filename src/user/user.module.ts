import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import {DynamooseModule} from "nestjs-dynamoose";
import {UserSchema} from "./schema/user.schema";

@Module({
  imports: [
    DynamooseModule.forFeature([
      {
        name: 'user',
        schema: UserSchema,
      },
    ]),
  ],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule {}
