import { model } from 'mongoose';

export default model<any>('Comments', {
    name: { type: String, required: false },
    comment: { type: String, required: false },
    date: { type: Date, required: false }
})