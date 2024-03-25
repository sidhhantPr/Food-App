import express from "express";
import dotenv from "dotenv";
import Razorpay from "razorpay";
import router from "./routes/routes.js";
import cors from "cors";
const app = express();
dotenv.config({ path: "./config/config.env" });

export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

app.use(cors());
app.use(express.json());
app.use("/api", router);
app.listen(process.env.PORT, () =>
  console.log(`server is running at port 3000`)
);
