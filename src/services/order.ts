import OrderModel from "../models/order";

const getOrders = async () => {
  const responseItem = await OrderModel.find({});
  return responseItem;
};

const getOrder = async () => {};

const postOrder = async () => {};
export { getOrders, postOrder, getOrder };
