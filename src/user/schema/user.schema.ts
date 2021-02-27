import { Schema } from 'dynamoose';

export const UserSchema = new Schema({
    id: {
        type: String,
        hashKey: true,
    },
    socialType: {
        type: String,
    },
    socialId: {
        type: Number,
        index: {
            global: true,
        },
    },
    createdAt: {
        type: Number,
    },
});