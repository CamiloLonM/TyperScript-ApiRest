import { Router } from "express";
import {
  getOrders,
  getOrder,
  postOrder,
  updateOrder,
} from "../controllers/order";
import { checkSection } from "../middleware/activeSection";

const router = Router();

//Estas rutas son privadas solo pueden acceder las personas que tienen JWT valido
router.get("/", checkSection, getOrders);
router.get("/:id", getOrder);
router.post("/", postOrder);
router.put("/", updateOrder);

export { router };
