import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty, IsString} from "class-validator";

export class CreatePostInput {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    content: string;

    @ApiProperty({
        default: 'all',
    })
    @IsString()
    @IsNotEmpty()
    postType: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    category: string;

    @ApiProperty({
        nullable: true
    })
    emotion?: string;

    @ApiProperty({
        nullable: true
    })
    target?: string;

    @ApiProperty({
        nullable: true
    })
    room?: string;
}
