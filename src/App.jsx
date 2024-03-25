import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import { useState } from "react";
import { createBrowserRouter } from "react-router-dom";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import PaymentSuccessPage from "./components/PaymentSucces";

const App = () => {
  const [searchData, setSearchData] = useState("");
  const [btn, setBtn] = useState(false);
  return (
    <div>
      <Header
        searchData={searchData}
        setSearchData={setSearchData}
        setBtn={setBtn}
      />
      <Body searchData={searchData} setBtn={setBtn} btn={btn} />
    </div>
  );
};
const AppLayout = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/menu/:cloudinaryImageId/:avgRating/:costForTwo/:cuisines/:name",
    element: <Menu />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  { path: "/success", element: <PaymentSuccessPage /> },
]);
export default AppLayout;
