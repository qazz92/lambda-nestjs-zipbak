import {Body, Controller, Get, HttpCode, Param, Post, Query, Req, UseGuards} from '@nestjs/common';
import {ApiCreatedResponse, ApiOkResponse, ApiTags} from "@nestjs/swagger";
import {PostService} from "./post.service";
import {Post as PostModel} from "./model/post.model";
import {CreatePostInput} from "./model/create-post.input";
import {FindPostInput} from "./model/find-post.input";
import {ListPostInput} from "./model/list-post.input";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";

@ApiTags('post')
@Controller('post')
export class PostController {
    constructor(private readonly postService : PostService) {}

    @ApiCreatedResponse({
        description: 'The record has been successfully created.',
        type: PostModel,
    })
    @Post()
    @HttpCode(201)
    @UseGuards(JwtAuthGuard)
    async create(@Body() body: CreatePostInput, @Req() req : any) {
        return await this.postService.create(body, req.user);
    }

    @ApiOkResponse()
    @Get(':id')
    async find(@Param() param : FindPostInput) {
        return await this.postService.find(param);
    }

    @ApiOkResponse()
    @Get()
    async list(@Query() query : ListPostInput) {
        return await this.postService.list(query);
    }
}
