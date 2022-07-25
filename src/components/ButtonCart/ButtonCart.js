import React from "react";
import { useSelector } from 'react-redux'
import s from "./ButtonCart.module.scss"
import busket from "../../assets/img/busket.svg"
import { Link } from "react-router-dom";
import { selectCart } from "../../store/slices/cartSlice";

function ButtonCart() {
  // const {totalPrice,totalCount} = useSelector( ({cart}) => cart)

  const { totalPrice, items } = useSelector(selectCart);

  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  // const totalCount = 7;
  // const totalPrice = 1421;
  return (
    <div >
      <Link to='/bucket' className={s.button }>
        <span>{totalPrice} ₴</span>
        <div className={s.button__delimiter}></div>
        <img className={s.img} src={busket} alt="busket-icon"></img>
        <span >{totalCount}</span>
      </Link>
    </div>
  );
}

export default ButtonCart;