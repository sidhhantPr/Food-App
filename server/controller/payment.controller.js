import { instance } from "../server.js";
import crypto from "crypto";
export const checkOut = async (req, res) => {
  try {
    const { amount } = req.body;
    const options = {
      amount: Number(amount * 100),
      currency: "INR",
    };
    const order = await instance.orders.create(options);
    // console.log(order);
    res.status(200).json({
      message: "done",
      order,
    });
  } catch (error) {
    console.log("error");
    console.log(error);
  }
};

export const checkOutPaymentHandler = async (req, res) => {
  res.redirect(`http://localhost:5173/success`);
};
