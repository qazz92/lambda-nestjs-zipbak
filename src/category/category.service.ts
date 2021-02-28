import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {

    async list() {
        return [
            {
                "category" : "사건/사고"
            },
            {
                "category" : "질문"
            },
            {
                "category" : "기타"
            }
        ];
    }
}
