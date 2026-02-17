import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import { connectToDB } from "./config/config.js";
import router from "./routes/holdingRoutes.js"; // HoldingsRouter
import positionRouter from "./routes/positionRoutes.js"; // PositionsRouter
import orderRouter from "./routes/orderRoutes.js";
import userRouter from "./routes/userRoutes.js";
const app = express();
// app.use(cors());
app.set("trust proxy", 1); 
const allowedOrigins = [
  "https://trade-flow-frontend.onrender.com",
  "https://trade-flow-dashboard-fhaz.onrender.com"
];
app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (mobile apps, curl, Postman)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("Not allowed by CORS"));
      }
    }, 
    credentials: true,                 // allow cookies
  })
);

app.use(bodyParser.json());
app.use(cookieParser());
const PORT = process.env.PORT || 3002;
app.use("/holdings", router);
app.use("/positions", positionRouter);
app.use("/orders", orderRouter);
app.use("/users", userRouter);
app.get("/", (req, res)=>{
  res.send("Hey i am root !")
})



app.use((err, req, res, next) => {
  console.log(err);
  if (err instanceof mongoose.Error.ValidationError) {
    return res.status(400).send(err.message);
  } else {
    return res.status(500).send("Server Error");
  }
});
app.use((req,res) => res.status(404).send("Not Found"));
console.log(PORT)
app.listen(PORT, () => {
  console.log("App started!");
  connectToDB();
});
