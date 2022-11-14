import { Router } from "express";
import productRouter from "./productRouter.js";
import userRouter from "./userRouter.js";

const router = new Router();

router.use("/product", productRouter);
router.use("/user", userRouter);

export default router;
