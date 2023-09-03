import dbConnect from "lib/dbConnect";
import Comments from "../models/Comments";

export default async function getComments() {
  await dbConnect();
  return Comments.find({}, "name comment date -_id").then((result) => {
    let arr = [];

    for (let value of result) {
      arr.push({
        name: value.name,
        comment: value.comment,
        date: value.date,
      });
    }

    return arr;
  });
}
