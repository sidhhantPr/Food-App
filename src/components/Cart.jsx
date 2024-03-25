import { useSelector, useDispatch } from "react-redux";
import Delete from "../assets/delete-bin-7-fill.png";
import { removeItem } from "../store/cart/cartSlice";
import axios from "axios";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.cartMenu);

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };
  const dispatch = useDispatch();

  const checkoutHandler = async () => {
    const {
      data: { order },
    } = await axios.post("http://localhost:3000/api/checkout", {
      amount: getTotalPrice().toFixed(2),
    });
    const {
      data: { key },
    } = await axios.get("http://localhost:3000/api/getkey");
    console.log(key);
    const options = {
      key: key,
      amount: order.amount,
      currency: "INR",
      name: "sidhhant",
      description: "Test Transaction",
      image:
        "https://razorpay.com/docs/build/browser/static/razorpay-docs-dark.6f09b030.svg",
      order_id: order.id,
      callback_url: "http://localhost:3000/api/verify",
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9000090000",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    const razor = new Razorpay(options);

    razor.open();
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-bold mb-4">Your Cart</h1>

        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            <div className="flex flex-col  gap-4 ">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-4 rounded-md shadow-md mb-4"
                >
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-lg font-semibold">{item.name}</p>
                    <p className="text-gray-500">{item.price.toFixed(2)}</p>
                  </div>
                  <button
                    onClick={() => dispatch(removeItem(item))}
                    class=" text-white font-bold py-2 px-4 rounded-md shadow hover:bg-yellow-400 transition-all"
                  >
                    <img height={25} width={15} src={Delete} />
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-4 bg-white p-4 rounded-md shadow-md">
              <p className="text-lg font-semibold">
                Total: {getTotalPrice().toFixed(2)}
              </p>
              <button
                onClick={checkoutHandler}
                className="bg-yellow-500 text-white px-4 py-2 mt-4 rounded-md font-bold hover:bg-yellow-600"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
