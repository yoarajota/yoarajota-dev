import { defaultResponse, keyable } from "asset/types";
import { NextApiRequest, NextApiResponse } from "next";
import isLoggedIn from "../../../lib/isLoggedIn";

async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Buffer | defaultResponse>
) {
    return res.status(200).json({ status: "success" });
}

export default isLoggedIn(handler)