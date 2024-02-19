import { useState,useEffect } from "react";
import { RESTURANT_API_URL } from "../config";
import axios from "axios";
import Card from "./Card";
// import {RESTURANT_INFO} from "../config"
const Body = () => {
            const [resData,setResData]=useState([]);
      async function getData()
      {
            try {
                  const res=await axios.get(RESTURANT_API_URL);
            const restrurants=res?.data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            setResData(restrurants ||[]);
            
            } catch (error) {
              console.log(error);    
            }
      }
      useEffect(()=>{
            getData();
      },[])
      if(resData?.length===0)return <h1 key={"fc"}>wait!!!</h1>
  return (
    <div  className="flex flex-wrap h-full justify-center items-center w-4/6 gap-8 mt-5 ml-auto mr-auto" >
      {
            resData.map((data, index)=><Card key={index}{...data.info}/>)
      }
    </div>
  )
}

export default Body