import { Router } from "express";
import productController from "../controllers/productController.js";
import { checkRoleMiddleware } from "../middleware/checkRoleMiddleware.js";

const router = new Router();

router.get("/", productController.getAll);
router.get("/:id", productController.getOne);
router.post("/", checkRoleMiddleware("ADMIN"), productController.create);
router.delete("/:id", productController.delete);
router.patch("/:id", productController.update);

export default router;
