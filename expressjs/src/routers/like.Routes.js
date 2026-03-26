import express from "express";
import { likeController } from "../controllers/like.Controller.js";
const likeRouter = express.Router();

// 👉 Like nhà hàng
likeRouter.post("/", likeController.like);
// 👉 Lấy danh sách like theo nhà hàng
likeRouter.get("/restaurant/:restaurantId", likeController.getByRestaurant);

// 👉 Lấy danh sách like theo user 
likeRouter.get("/user/:userId", likeController.getByUser);



export default likeRouter;
