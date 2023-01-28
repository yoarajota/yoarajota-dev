import mongoose, { model, Schema } from 'mongoose';

interface Comm {
    name: String,
    comment: String,
    date: Date
  }

const NComm = new Schema<Comm>({
    name: String,
    comment: String,
    date: Date
});

export default mongoose.models.Comments || model('Comments', NComm)