import mongoose, { model, Schema } from "mongoose";

interface CredentialsType {
  username: string;
  password: string;
}

const Credentials = new Schema<CredentialsType>({
  username: String,
  password: String,
});

export default mongoose.models.Credentials || model("Credentials", Credentials);
