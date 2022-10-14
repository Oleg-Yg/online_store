import {Router} from "express";
import productRouter from "./productRouter.js"

const router = new Router()

router.use("/product", productRouter)

export default router