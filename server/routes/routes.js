import express from "express";
import {
  checkOut,
  checkOutPaymentHandler,
} from "../controller/payment.controller.js";

const router = express.Router();

router.route("/checkout").post(checkOut);
router.route("/verify").post(checkOutPaymentHandler);
router.get("/getkey", (req, res) =>
  res.status(200).json({ key: process.env.RAZORPAY_KEY })
);
export default router;
