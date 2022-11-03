import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { RequestExt } from "../interfaces/req-ext";
import {
  callOrder,
  callOrders,
  insertOrder,
  removeOrder,
} from "../services/order";

const getOrder = async (req: Request, res: Response) => {
  try {
    const { numberOfOrder } = req.params;
    const response = await callOrder(numberOfOrder);
    const data = response ? response : "NOT_FOUND";
    res.send(data);
  } catch (error) {
    handleHttp(res, "ERROR_Get_Order");
  }
};

const getOrders = async (req: RequestExt, res: Response) => {
  try {
    const response = await callOrders();
    res.send({ response, user: req.user }); // trazabilidad -- El user que hace la petición
  } catch (error) {
    handleHttp(res, "ERROR_Get_Orders");
  }
};

const updateOrder = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "ERROR_Update_Order");
  }
};

const postOrder = async ({ body }: Request, res: Response) => {
  try {
    const responseOrder = await insertOrder(body);
    res.send(responseOrder);
  } catch (error) {
    handleHttp(res, "ERROR_Post_Blog");
  }
};

const deleteOrder = async ({ params }: Request, res: Response) => {
  try {
    const { numberOfOrder } = params;
    const responseOrder = await removeOrder(numberOfOrder);
    res.send(responseOrder);
  } catch (error) {
    handleHttp(res, "ERROR_Delete_Blog");
  }
};

export { getOrder, getOrders, postOrder, deleteOrder, updateOrder };
