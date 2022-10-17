import { Schema, Types, model, Model } from "mongoose";
import { Car } from "../interfaces/car.interface";

const ItemSchema = new Schema<Car>(
  {
    type: {
      type: String,
      enum: ["Automobiles", "Trucks", "Pick-up", "Wagon"],
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    cylinder: {
      type: Number,
      required: true,
    },
    gas: {
      type: String,
      enum: ["Gasoline", "Electric", "Diesel", "Hybrid"],
      required: true,
    },
    descripcion: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
  },

  {
    timestamps: true,
    versionKey: false,
  }
);

const ItemModel = model("items", ItemSchema);

export default ItemModel;
