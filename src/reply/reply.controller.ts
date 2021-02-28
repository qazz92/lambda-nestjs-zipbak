import {Body, Controller, Get, HttpCode, Post, Query, Req, UseGuards} from '@nestjs/common';
import {ReplyService} from "./reply.service";
import {CreateReplyInput} from "./model/create-reply.input";
import {ListReplyInput} from "./model/list-reply.input";
import {ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiTags} from "@nestjs/swagger";
import {Reply} from "./model/reply.model";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";

@ApiTags('reply')
@Controller('reply')
export class ReplyController {
    constructor(private readonly replyService : ReplyService) {}

    @ApiCreatedResponse({
       description: 'The record has been successfully created.',
       type: Reply,
    })
    @HttpCode(201)
    @Post()
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    async create(@Body() body : CreateReplyInput, @Req() req : any) {
        return await this.replyService.create(body, req.user);
    }

    @ApiOkResponse()
    @Get()
    async list(@Query() query : ListReplyInput) {
        return this.replyService.list(query);
    }
}
