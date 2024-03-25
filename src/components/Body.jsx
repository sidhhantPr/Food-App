import { useState, useEffect } from "react";
import { Restaurantinfo } from "../config/RestaruantApiData";
import Card from "./Card";
const Body = ({ searchData, setBtn, btn }) => {
  let [resData, setResData] = useState([]);
  function getData() {
    const { data } = Restaurantinfo;
    let restrurants =
      data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants;
    let filterRes = restrurants;
    if (btn) {
      setBtn(false);
    } else {
      filterRes = filterRes.filter((rest) =>
        rest.info.name.toLowerCase().includes(searchData.toLowerCase())
      );
      setResData(filterRes || []);
    }
  }
  useEffect(() => {
    getData();
  }, [btn]);
  if (resData?.length === 0)
    return <h1 key={"fc"}>wait!!! or network Error!!</h1>;
  return (
    <div className="flex flex-wrap h-full justify-center items-center w-4/6 gap-8 mt-5 ml-auto mr-auto">
      {resData.map((data, index) => (
        <Card key={index} {...data.info} />
      ))}
    </div>
  );
};

export default Body;
