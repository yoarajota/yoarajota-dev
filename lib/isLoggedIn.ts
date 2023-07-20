import { defaultResponse } from 'asset/types';
import jwt from 'jsonwebtoken';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

const isLoggedIn = (handler: NextApiHandler) => async (req: NextApiRequest,
    res: NextApiResponse<defaultResponse>) => {

    const token = req.headers.authorization?.replace('Bearer ', '');
    console.log(token)

    if (!token) {
        return res.status(401).json({ status: "error", message: "Unauthenticated" });
    }

    try {
        jwt.verify(token, String(process.env.TOKEN_SECRET_KEY));

        return handler(req, res);
    } catch (error) {
        return res.status(401).json({ status: "error", message: "Erro" });
    }
};

export default isLoggedIn;