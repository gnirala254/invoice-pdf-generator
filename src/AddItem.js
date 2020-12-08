import React, { useState } from "react";
import "./AddItem.css";
import { useDispatch } from "react-redux";
import { Quantity, Rate, Amount, Tax, Discount } from "./store/action";

function AddItem() {
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(null);
  const [rate, setRate] = useState(null);
  const [amount, setAmount] = useState(null);
  const [tax, setTax] = useState(null);
  const [discount, setDiscount] = useState(null);

  const handleChangeQuantity = (e) => {
    setQuantity(e.target.value);
    dispatch(Quantity(e.target.value));
  };
  const handleChangeRate = (e) => {
    setRate(e.target.value);
    dispatch(Rate(e.target.value));
  };
  const handleChangeTax = (e) => {
    setTax(e.target.value);
    dispatch(Tax(e.target.value));
  };
  const handleChangeDiscount = (e) => {
    setDiscount(e.target.value);
    dispatch(Discount(e.target.value));

    const subTotal =
      Number(rate) * Number(quantity) + Number(tax) - Number(discount);
    setAmount(subTotal);
    dispatch(Amount(amount));
  };

  return (
    <div className="invoice__body">
      <div className="invoice__input exclude">
        <lable>Item Name: </lable>
        <input type="text" placeholder="Item Name" />
      </div>
      <div className="invoice__input">
        <lable>Quantity: </lable>
        <input
          type="number"
          placeholder="quantity"
          onChange={handleChangeQuantity}
        />
      </div>
      <div className="invoice__input">
        <lable>Item Price: </lable>
        <input
          type="number"
          placeholder="Item price"
          onChange={handleChangeRate}
        />
      </div>
      <div className="invoice__input">
        <lable>Tax: </lable>
        <input type="number" placeholder="Tax" onChange={handleChangeTax} />
      </div>
      <div className="invoice__input">
        <lable>Discount: </lable>
        <input
          type="number"
          placeholder="Discount"
          onChange={handleChangeDiscount}
        />
      </div>
      <div>
        <p>
          Sub Total:{" "}
          {Number(rate) * Number(quantity) + Number(tax) - Number(discount)}
        </p>
      </div>
    </div>
  );
}

export default AddItem;
