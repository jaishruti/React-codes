import Card from "./Card.js";
import React, { useState } from "react";
import "./index.css";

export default function Product(props) {
  // to show the clicked data
  const [clickedProduct, setClickedData] = useState("");
//   const [myProduct, setMyProduct] = useState([""]);

  //when add button clicked
  function clickHandler() {
    setClickedData(props.name);
  }
  return (
    <Card className="product ">
      <div className="flex gap-5 align-middle items-center bg-gray-500">
        <p>{props.name}</p>
        <p>{props.price}</p>
        <button onClick={clickHandler} className="bg-black text-white p-2">
          Add
        </button>
      </div>
      {clickedProduct !== "" && <p>You clicked {clickedProduct}</p>}
      {/* <p>Products added: {myProduct}</p> */}
    </Card>
  );
}
