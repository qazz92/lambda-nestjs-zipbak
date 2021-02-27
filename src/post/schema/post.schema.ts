import { Schema } from 'dynamoose';

export const PostSchema = new Schema({
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
    category: {
        type: String,
    },
    content: {
        type: String,
    },
    emotion: {
        type: String,
    },
    target: {
        type: String,
    },
    room: {
        type: String,
    },
    postType: {
        type: String,
        index: {
            global: true,
            rangeKey: 'createdAt',
        },
    },
    createdAt: {
        type: Number,
    },
});