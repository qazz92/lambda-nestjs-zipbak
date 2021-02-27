import {Module} from '@nestjs/common';
import {AuthController} from './auth.controller';
import {AuthService} from './auth.service';
import {JwtModule} from "@nestjs/jwt";
import {jwtConstants} from "./constants";
import {KakaoStrategy} from "./kakao.strategy";
import {JwtStrategy} from "./jwt.strategy";
import {UserModule} from "../user/user.module";
import {PassportModule} from "@nestjs/passport";

@Module({
    imports: [
        UserModule,
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: {expiresIn: '7d'},
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy, KakaoStrategy]
})
export class AuthModule {
}
