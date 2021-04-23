import {Router} from "express"

const usersRouter = Router()

usersRouter.use("/", (req, res) => {
  res.json({test: "Successful"})
})

export default usersRouter