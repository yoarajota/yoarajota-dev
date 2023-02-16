import { defaultResponse } from "asset/types";
import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from 'path';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Buffer | defaultResponse>
) {
    const filePath = path.join(process.cwd(), "./src/files/asdsa.pdf");

    try {
        const imageBuffer = fs.createReadStream(filePath);
        await new Promise(function (resolve) {
            res.setHeader('Content-Type', 'application/pdf');
            imageBuffer.pipe(res);
            imageBuffer.on('end', resolve);
        });
    } catch (e) {
    }
}