import {Router} from "express"
import usersRouter from "./v1/users"

const apiRouter = Router()

apiRouter.use("/v1/users", usersRouter)

export default apiRouter