import { Request, Response } from "express";
import { registerUser, logginUser } from "../services/auth";

const registerCtrl = async ({ body }: Request, res: Response) => {
  const responseUser = await registerUser(body);
  res.send(responseUser);
};

const logginCtrl = async (req: Request, res: Response) => {};

export { registerCtrl, logginCtrl };
