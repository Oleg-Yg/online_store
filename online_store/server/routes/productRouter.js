import { Router } from "express";
import productController from "../controllers/productController.js";

const router = new Router();

router.get("/", productController.getAll);
router.get("/:id", productController.getOne);
router.post("/", productController.create);
router.delete("/:id", productController.delete);
router.patch("/:id", productController.update);

export default router;
