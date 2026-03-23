import "dotenv/config";
import express from 'express';
import rootRouter from "./routers/root.router.js";
// import rootRouter from './routers/root.router.js';

const app = express();
const router = express.Router();
app.use(Router);
app.use("/api", rootRouter);
app.use(express.json());
const port = 3069;
const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});