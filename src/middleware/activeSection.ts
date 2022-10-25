import { NextFunction, Response } from "express";
import { verifyToken } from "../utils/jwt.handle";

// 1 ---Saber quien esta consumiendo la data
import { RequestExt } from "../interfaces/req-ext";

const checkSection = (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || "";
    const jwt = jwtByUser.split(" ").pop();
    const isUser = verifyToken(`${jwt}`) as { id: string }; // pasa a ser un string el as por problema de tipado
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
