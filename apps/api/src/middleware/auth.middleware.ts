import { fromNodeHeaders } from "better-auth/node";
import { auth } from "../lib/auth";
import { Request, Response, NextFunction } from 'express';

export const sessionMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const session = await auth.api.getSession({
            headers: fromNodeHeaders(req.headers)
        });

        if (session) {
            // @ts-ignore
            req.user = session.user;
            // @ts-ignore
            req.session = session.session;
        }
        next();
    } catch (error) {
        next();
    }
};
