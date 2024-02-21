import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import { useState } from "react";
const App = () => {
  const [searchData, setSearchData] = useState("Search");

  return (
    <div>
      <Header searchData={searchData} setSearchData={setSearchData} />
      <Body />
    </div>
  );
};
export default App;
