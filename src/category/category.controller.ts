import {Controller, Get} from '@nestjs/common';
import {ApiOkResponse, ApiTags} from "@nestjs/swagger";
import {CategoryService} from "./category.service";

@ApiTags('category')
@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService : CategoryService) {}

    @ApiOkResponse()
    @Get()
    async list() {
        return await this.categoryService.list();
    }
}
