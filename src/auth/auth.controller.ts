import {Controller, UseGuards, Req, Post, HttpCode, Res} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {ApiOkResponse, ApiTags} from "@nestjs/swagger";
import {KaKaoAuthGuard} from "./kakao-auth.guard";

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService : AuthService) {}

    @ApiOkResponse()
    @Post('kakao')
    @HttpCode(200)
    @UseGuards(KaKaoAuthGuard)
    async kakaoAuthCheck(@Req() req : any, @Res({ passthrough: true }) response: any) {
        const token = await this.authService.login(req);
        response.cookie('token', token.access_token, {httpOnly : true})
        return token;
    }
}
