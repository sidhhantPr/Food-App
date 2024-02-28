import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
// import { store } from "../store";
import { addItem } from "../store/cart/cartSlice";
const Menu = () => {
  const { cloudinaryImageId, avgRating, costForTwo, cuisines, name } =
    useParams();
  console.log(cloudinaryImageId, avgRating, costForTwo, cuisines, name);
  const menuInfo = {
    menu: [
      { id: 1, name: "Malai Kofta", price: 110 },
      { id: 2, name: "Chiken tikka", price: 90 },
    ],
  };

  const cartMenu = useSelector((store) => store.cart.cartMenu);
  console.log(cartMenu);
  const dispatch = useDispatch();

  return (
    <>
      <div className="bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 shadow-md rounded-md mx-auto mt-8 max-w-lg">
          <div className="mb-4">
            <h1 className="text-3xl font-bold mb-2">{name}</h1>
            <p className="text-gray-600 mb-2 text-xs m-1">{cuisines}</p>
            <p className="text-gray-600 mb-2 text-sm">
              Delivery Time: 30-40 | Rating: {avgRating}
            </p>
            <p className="text-gray-600 mb-2 text-sm">
              Estimated Time: 35 mins | Cost for Two: {costForTwo}
            </p>
          </div>

          <div className="grid  gap-4">
            {menuInfo.menu.map((item) => (
              <div
                key={item.id}
                className="bg-white p-4 rounded-md shadow-md flex justify-around gap-4 items-center"
              >
                <div>
                  <img
                    src={
                      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                      cloudinaryImageId
                    }
                    alt={item.name}
                    className="w-full h-32 object-cover mb-4 rounded-md"
                  />
                  <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                </div>
                <div>
                  <p className="text-gray-600">₹{item.price}</p>
                  <div>
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 hover:bg-blue-600"
                      onClick={() => {
                        dispatch(addItem(item));
                        return toast.success(
                          `Successfully Order ${item.name} added!`
                        );
                      }}
                    >
                      Order
                    </button>
                    <ToastContainer />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
