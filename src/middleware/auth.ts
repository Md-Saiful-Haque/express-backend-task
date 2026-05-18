import type { NextFunction, Request, Response } from "express";


const auth = () => {
    return async (req: Request, res: Response, next: NextFunction) => {
        // console.log("This is private route");
        // console.log(req.headers.authorization);

        const token = req.headers.authorization;

        if (!token) {
            res.status(401).json({
                success: false,
                message: "Unauthorize access!!"
            })
        }
        next()
    }
}

export default auth