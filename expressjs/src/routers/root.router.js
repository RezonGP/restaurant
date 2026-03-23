import express from 'express';
import likeRouter from './like.Routes.js';
import orderRouter from './order.Routes.js';
import ratingRouter from './rating.Routes.js';

const rootRouter = express.Router();

rootRouter.use("/like", likeRouter);
rootRouter.use("/order", orderRouter);
rootRouter.use("/rating", ratingRouter);
export default rootRouter;