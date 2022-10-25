import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { RequestExt } from "../interfaces/req-ext";

const getOrder = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "ERROR_Update_Blog");
  }
};

const getOrders = (req: RequestExt, res: Response) => {
  try {
    res.send({ data: "esto lo ven los registrados", user: req.user }); // trazabilidad -- El user que hace la petición
  } catch (error) {
    handleHttp(res, "ERROR_Update_Blog");
  }
};

const updateOrder = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "ERROR_Update_Blog");
  }
};

const postOrder = ({ body }: Request, res: Response) => {
  try {
    res.send(body);
  } catch (error) {
    handleHttp(res, "ERROR_Post_Blog");
  }
};

const deleteBlog = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "ERROR_Delete_Blog");
  }
};

export { getOrder, getOrders, postOrder, deleteBlog, updateOrder };
