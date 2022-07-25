import React from "react";
import s from "./Cartitem.module.scss";
import { useDispatch } from 'react-redux';
import { removeItem } from "../../store/slices/cartSlice";


function CartItem({ id,name, imageUrl, totalPrice,totalCount,category}) {
  const dispatch = useDispatch();

  const onClickRemove = () => {
    if (window.confirm('Ты действительно хочешь удалить товар?')) {
      dispatch(removeItem(id));
    }
  };
  
  return (
    <div className={s.item}>
      <div className={s.item__img}>
        <img
          src={imageUrl}
          alt="Pizza"
        />
      </div>
      <div className={s.item__info}>
        <h3>{name}</h3>
        <p>{category}</p>
      </div>
      <div className={s.item__count}>
        {/* <div className={s.item__button} >
          <span className={s.item__button__minus}>-</span>
        </div> */}
        <b>{totalCount}</b>
        {/* <div className={s.item__button} onClick={()=>alert(123)}>
        </div> */}
      </div>
      <div className={s.item__price}>
        <b>{totalPrice} ₽</b>
      </div>
      <div className={s.item__remove}>
        <div className={s.item__button} >
          <span className={s.item__button__remove} onClick={()=>onClickRemove()}>х</span>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
