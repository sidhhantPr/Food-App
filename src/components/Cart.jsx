import { useSelector } from "react-redux";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.cartMenu);

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
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
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 bg-white p-4 rounded-md shadow-md">
              <p className="text-lg font-semibold">
                Total: {getTotalPrice().toFixed(2)}
              </p>
              <button className="bg-yellow-500 text-white px-4 py-2 mt-4 rounded-md">
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
