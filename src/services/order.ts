import { Order } from "../interfaces/order.interface";
import OrderModel from "../models/order";
import { Document } from "mongoose";

const callOrders = async (): Promise<Document<any, any, Order>[]> => {
  const responseItem = await OrderModel.find({});
  return responseItem;
};

const callOrder = async (numberOfOrder: string) => {
  const responseId = await OrderModel.findOne({ numberOfOrder });
  return responseId;
};

const insertOrder = async (
  order: Order
): Promise<Document<any, any, Order>> => {
  const responseInsert = await OrderModel.create(order);
  return responseInsert;
};

const removeOrder = async (numberOfOrder: string) => {
  const reponseRemove = await OrderModel.deleteOne({ numberOfOrder });
  return reponseRemove;
};

export { callOrder, insertOrder, callOrders, removeOrder };
