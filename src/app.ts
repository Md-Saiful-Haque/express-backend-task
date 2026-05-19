import express, { json, type Application, type Request, type Response } from "express"
import config from "./config";
import { userRoute } from "./modules/user/user.route";
import { profileRoute } from "./modules/profile/profile.route";
import { authRoute } from "./modules/auth/auth.route";
import logger from "./middleware/logger";
import CookieParser from "cookie-parser";
import cors from "cors"
import { globalErrorHandler } from "./middleware/globalErrorHandler";


const app: Application = express()
// const port = config.port;

app.use(CookieParser())
app.use(express.json())
app.use(express.text())
app.use(express.urlencoded({ extended: true }))

app.use(cors({
  origin: "http://localhost:3000/"
}))

app.use(logger)


app.get('/', (req: Request, res: Response) => {
  // res.send('Hello World!')
  res.status(200).json({
    message: "Express Server",
    "author": "Saiful"
  })
})

app.use("/api/users", userRoute)
app.use("/api/profiles", profileRoute)
app.use("/api/auth" , authRoute)

// Global Error Handling Middleware
app.use(globalErrorHandler);


export default app
