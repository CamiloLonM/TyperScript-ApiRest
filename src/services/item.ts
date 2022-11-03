import { Car } from "../interfaces/car.interface";
import ItemModel from "../models/item";

const getCars = async () => {
  const responseItem = await ItemModel.find({});
  return responseItem;
};

const getCar = async (id: string) => {
  const responseId = await ItemModel.findOne({ _id: id });
  return responseId;
};

const insertCar = async (item: Car) => {
  const responseInsert = await ItemModel.create(item);
  return responseInsert;
};

const updateCar = async (id: string, data: Car) => {
  const responseUpdate = await ItemModel.findByIdAndUpdate({ _id: id }, data, {
    new: true, // responde el objeto actualizado
  });
  return responseUpdate;
};

const deleteCar = async (id: string) => {
  const respondeDelete = await ItemModel.deleteOne({ _id: id });
  return respondeDelete;
};

export { insertCar, getCars, getCar, updateCar, deleteCar };
