const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
req.body;
console.log(req.body);
const body = razorpay_order_id + "|" + razorpay_payment_id;

const expectedSignature = crypto
.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
.update(body.toString())
.digest("hex");

const isAuthentic = expectedSignature === razorpay_signature;
console.log(isAuthentic);
console.log(razorpay_signature);
console.log(expectedSignature);
if (isAuthentic) {
Database comes here

await Payment.create({
razorpay_order_id,
razorpay_payment_id,
razorpay_signature,
});

res.redirect(
`http://localhost:5173/paymentsuccess?reference=${razorpay_payment_id}`
);
} else {
res.status(400).json({
success: false,
});
}
res.status(200).json({
success: true,
});
