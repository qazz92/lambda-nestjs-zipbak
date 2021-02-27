import { Injectable } from '@nestjs/common';
import {JwtService} from "@nestjs/jwt";
import {UserService} from "../user/user.service";
import axios from "axios";

@Injectable()
export class AuthService {

    constructor(
        private readonly jwtService : JwtService,
        private readonly userService : UserService
    ) {}

    async validateUser(token: string, _1 : string): Promise<any> {
        try {
            const res = await axios.get('https://kapi.kakao.com/v2/user/me', {
                headers : {
                    'Authorization': `Bearer ${token}`,
                    'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
                }
            });

            if (res.status === 200) {
                const data = res.data;
                console.log(data);
                const user = this.userService.find(data.id);
                if (typeof user !== 'undefined') {
                    return user;
                } else {
                    return null;
                }
            }

            return null;
        } catch (error) {
            return null;
        }

    }

    async login(req : any) {
        const payload = { username: req.user.id, sub: req.user.socialId };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
