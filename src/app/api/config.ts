import { defaultResponse, keyable } from "asset/types";
import { NextApiRequest, NextApiResponse } from "next";
import api from "./../../api/axios"

// precisa de middleware
async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Buffer | defaultResponse>
) {
    let json = req.body

    let arr = [];
    for (const key in json) {
        let obj: keyable = {};
        obj.operation = 'upsert'
        obj.key = key;
        obj.value = json[key];
        arr.push(obj)
    }

    await api.patch(
        `https://api.vercel.com/v1/edge-config/${process.env.EDGE_CONFIG_ID}/items?teamId=`,
        {
            items: arr,
        },
        {
            headers: {
                Authorization: `Bearer ${process.env.VERCEL_API_TOKEN}`,
                'Content-Type': 'application/json',
            },
        },
    )

    await res.revalidate('/')
    await res.revalidate('/admin')
    return res.status(200).json({ status: "success" });
}

export default handler