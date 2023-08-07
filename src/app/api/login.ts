import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import { defaultResponse } from 'asset/types';


export default async function handler(req: NextApiRequest,
    res: NextApiResponse<defaultResponse>) {
    const requestMethod = req.method;

    if (requestMethod !== 'POST') {
        return res.status(405).json({ status: "error", message: "Erro" });
    }

    const { email, password } = req.body;

    try {
        const { ADM_EMAIL, ADM_PASSWORD, TOKEN_SECRET_KEY } = process.env;

        if (ADM_PASSWORD !== password || ADM_EMAIL !== email) {
            return res.status(401).json({ status: "error", message: "Invalid credentials" });
        }

        const token = jwt.sign({ remote_address: req.socket.remoteAddress }, String(TOKEN_SECRET_KEY), {
            expiresIn: '1h',
        });

        return res.status(200).json({ status: "success", token });
    } catch (error) {
        return res.status(500).json({ status: "error", message: "Error" });
    }
}