import dbConnect from "lib/dbConnect";
import Information from "../models/Information";

export default async function getInformation() {
    await dbConnect();
    return Information.find({}).then((result) => {
        for (let value of result) {
            value.data = JSON.parse(value.data);
        }

        return result;
    });
}
