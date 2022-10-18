import { Router } from "express";
import { registerCtrl, logginCtrl } from "../controllers/auth";

const router = Router();

router.post("/register", registerCtrl);
router.post("/login", logginCtrl);

export { router };
