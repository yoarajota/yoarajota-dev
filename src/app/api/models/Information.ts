import { Info } from 'asset/types';
import mongoose, { model, Schema } from 'mongoose';

const MInformation = new Schema<Info>({
    name: String,
    data: String,
});

export default mongoose.models.Information || model('Information', MInformation)