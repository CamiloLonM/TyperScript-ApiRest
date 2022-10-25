import { NextFunction, Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import { verifyToken } from "../utils/jwt.handle";

// 1 ---Saber quien esta consumiendo la data
interface RequestExt extends Request {
  user?: string | JwtPayload;
}

const checkSection = (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || "";
    const jwt = jwtByUser.split(" ").pop();
    const isUser = verifyToken(`${jwt}`); // pasa a ser un string
    if (!isUser) {
      res.status(401), res.send("YOU DON'T HAVE A VALID JWT");
    } else {
      (req.user = isUser), // 1  la llamo aca ----
        next();
    }
  } catch (error) {
    res.status(400);
    res.send("THE USER DOES NOT HAVE THESE PERMISSIONS");
  }
};

export { checkSection };
