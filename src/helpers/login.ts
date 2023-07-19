import { Credentials } from "asset/types";
import api from '../api/axios'
import jwt from 'jsonwebtoken';

export function verify(token: string) {
    try {
        return jwt.verify(token, String(process.env.TOKEN_SECRET_KEY));
    } catch (error) {
        return false;
    }
}