import express from "express";
import { likeController } from "../controllers/like.Controller.js";
const likeRouter = express.Router();

// 👉 Like nhà hàng
likeRouter.post("/", likeController.likeRestaurant);

// 👉 Unlike
likeRouter.delete("/", likeController.unlikeRestaurant);

// 👉 Lấy danh sách like theo nhà hàng
likeRouter.get("/restaurant/:restaurantId", likeController.getLikesByRestaurant);

// 👉 Lấy danh sách like theo user 
likeRouter.get("/user/:userId", likeController.getLikesByUser);


export default likeRouter;
