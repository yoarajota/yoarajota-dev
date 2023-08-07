import dbConnect from "lib/dbConnect";
import Comments from "../models/Comments";

export default async function getComments() {
  await dbConnect();
  return Comments.find({}, "name comment date");
}
