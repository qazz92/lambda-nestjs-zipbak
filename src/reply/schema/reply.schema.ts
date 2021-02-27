import { Schema } from 'dynamoose';

export const ReplySchema = new Schema({
    id: {
        type: String,
        hashKey: true,
    },
    userId: {
        type: String,
        index: {
            global: true,
            rangeKey: 'createdAt',
        },
    },
    postId: {
        type: String,
        index: {
            global: true,
            rangeKey: 'createdAt',
        },
    },
    content: {
        type: String,
    },
    createdAt: {
        type: Number,
    },
});