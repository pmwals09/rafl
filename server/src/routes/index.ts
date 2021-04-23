import {Router} from "express";
import apiRouter from "./api/api"

const rootRouter = Router();

rootRouter.use('/api', apiRouter);

export default rootRouter
