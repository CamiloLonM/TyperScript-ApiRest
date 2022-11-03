import { Schema, Types, model, Model } from "mongoose";
import { Order } from "../interfaces/order.interface";

const OrderSchema = new Schema<Order>(
  {
    company: {
      type: String,
      required: true,
    },
    cityAndState: {
      type: String,
      required: true,
    },
    residence: {
      type: String,
      required: true,
    },
    numberOfOrder: {
      type: Number,
      required: true,
    },
    telephone: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const OrderModel = model("orders", OrderSchema);

export default OrderModel;
