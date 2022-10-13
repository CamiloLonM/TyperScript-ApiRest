import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";

const getItem = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "ERROR_Get_Item");
  }
};

const getItems = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "ERROR_Get_Items");
  }
};

const updateItem = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "ERROR_Update_Item");
  }
};

const postItem = ({ body }: Request, res: Response) => {
  try {
    res.send(body);
  } catch (error) {
    handleHttp(res, "ERROR_Post_Item");
  }
};

const deleteItem = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "ERROR_Delete_Item");
  }
};

export { getItem, getItems, updateItem, postItem, deleteItem };
