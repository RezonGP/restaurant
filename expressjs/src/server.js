import "dotenv/config";
import express from 'express';
import rootRouter from "./routers/root.router.js";
import { errorMiddleware } from "./common/middlewares/error.middleware.js";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", rootRouter);

const port = 3069;
app.use(errorMiddleware);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
