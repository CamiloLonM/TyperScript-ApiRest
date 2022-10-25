import { Router } from "express";
import { getFile } from "../controllers/storage";
import { checkSection } from "../middleware/activeSection";
import multerMiddleware from "../middleware/multer";

const router = Router();

router.post("/", checkSection, multerMiddleware.single("myfile"), getFile);

export { router };
