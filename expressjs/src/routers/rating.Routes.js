import express from "express";
import { ratingController } from "../controllers/rating.Controller.js";
const ratingRouter = express.Router();

// 👉 Thêm đánh giá
ratingRouter.post("/", ratingController.createRating);

// 👉 Lấy theo nhà hàng
ratingRouter.get("/restaurant/:restaurant_id", ratingController.getRatingsByRestaurant);

// 👉 Lấy theo user
ratingRouter.get("/user/:user_id", ratingController.getRatingsByUser);

export default ratingRouter;
