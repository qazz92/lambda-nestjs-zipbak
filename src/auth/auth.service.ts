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
                const user = await this.userService.find(data.id);
                if (typeof user !== 'undefined' && user.count > 0) {
                    return user;
                } else {
                    return await this.userService.create({socialId: data.id, socialType: 'kakao', name: data.properties.nickname})
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
