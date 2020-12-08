import React, { useState } from "react";
import "./Invoice.css";
import AddItem from "./AddItem";
import { useSelector } from "react-redux";

function Invoice() {
  const state = useSelector((state) => state);
  //   console.log(state);
  const { amount, tax, rate, discount, quantity, total } = state;
  //   console.log(rate);

  //   const totalAMount = rate * quantity + tax - discount;
  //   let y = 0;
  //   console.log(total);
  //   total.map((num) => (y = y + num));
  //   console.log(y);

  const [click, setClick] = useState([]);
  //   const setClick = [];

  const handleClick = () => {
    // setClick.push(true);
    let updatedArray = click;
    updatedArray.push(1);
    setClick(updatedArray);
    // console.log(click.length);
  };

  const date = new Date().toJSON().slice(0, 10);
  return (
    <div className="invoice">
      <div className="invoice__header">
        <div>
          <lable>Name: </lable>
          <input type="text" placeholder="Invoice For?" />
        </div>

        <p>Date: {date}</p>
      </div>
      <AddItem />

      {click.map((item) => (
        <AddItem />
      ))}

      <div>
        <button onClick={handleClick}>Add Item</button>
      </div>
      <div>
        <p>
          Total Amount:{" "}
          {Number(rate) * Number(quantity) + Number(tax) - Number(discount)}
        </p>
      </div>
    </div>
  );
}

export default Invoice;
