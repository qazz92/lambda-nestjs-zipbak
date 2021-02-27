import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class KakaoStrategy extends PassportStrategy(Strategy, 'kakao') {
    constructor(private authService: AuthService) {
        super({
            usernameField: 'token',
            passwordField: 'provider',
        });
    }

    async validate(token : string, provider : string): Promise<any> {
        const user = await this.authService.validateUser(token, provider);
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}
