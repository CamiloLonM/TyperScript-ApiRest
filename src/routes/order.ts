import { Router } from "express";
import {
  getOrders,
  getOrder,
  postOrder,
  updateOrder,
  deleteOrder,
} from "../controllers/order";
import { checkSection } from "../middleware/activeSection";

const router = Router();

//Estas rutas son privadas solo pueden acceder las personas que tienen JWT valido
router.get("/", checkSection, getOrders);
router.get("/:numberOfOrder", checkSection, getOrder);
router.post("/", checkSection, postOrder);
router.put("/:numberOfOrder", checkSection, updateOrder);
router.delete("/:numberOfOrder", checkSection, deleteOrder);

export { router };
