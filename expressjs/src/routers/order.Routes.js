import express from "express";
import { orderController } from "../controllers/order.Controller.js";
const orderRouter = express.Router();

// 👉 Đặt món
orderRouter.post("/", orderController.createOrder);
export default orderRouter;
