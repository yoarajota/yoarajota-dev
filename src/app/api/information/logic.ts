import dbConnect from "lib/dbConnect";
import Information from "../models/Information";

export default async function getInformation() {
  await dbConnect();
  return Information.find({}).then((result) => {
    let arr = [];

    for (let value of result) {
      arr.push({
        name: value.name,
        data: JSON.parse(value.data),
      });
    }

    return arr;
  });
}
