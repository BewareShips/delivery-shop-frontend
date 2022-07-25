import React from "react";
import { Link } from "react-router-dom";
import s from "./Bucket.module.scss";

import trash from "../../assets/img/trash.svg";
import busket from "../../assets/img/busket.svg";
import arrow from "../../assets/img/grey-arrow-left.svg";

import { useSelector, useDispatch } from "react-redux";
// import { clearCart,removeCartItem } from "../../Redux/actions/cart";
import CartItem from "../../components/CartItem/Cartitem";
import EmptyCart from "./EmptyCart";
import { clearItems, selectCart } from "../../store/slices/cartSlice";
import UserForm from "../../components/UserForm/UserForm";

const Bucket = () => {
   const dispatch = useDispatch();
   const { totalPrice, items } = useSelector(selectCart);

   const totalCount = items.reduce((sum, item) => sum + item.count, 0);

   const onClickClear = () => {
      if (window.confirm("Очистить корзину?")) {
         dispatch(clearItems());
      }
   };

   

   return (
      <div className={s.container}>
       
         {totalCount ? (
            <div className={s.cart}>
               <div className={s.cart__top}>
                  <h2 className={s.cart__title}>
                     <img src={busket} alt="bucket" />
                     <span> Корзина</span>
                  </h2>
                  <div className={s.cart__clear}>
                     <span onClick={onClickClear}>
                        Очистить корзину <img src={trash} alt="trash sign" />
                     </span>
                  </div>
               </div>
               <div>
                  {items.map((obj) => (
                     <CartItem
                        id={obj._id}
                        name={obj.name}
                        imageUrl={obj.imageUrl}
                        category={obj.category}
                        totalPrice={obj.price * obj.count}
                        totalCount={obj.count}
                     />
                  ))}
               </div>
               <div className={s.bottom}>
                  <div className={s.bottom__details}>
                     <span>
                        Всего заказов: <b>{totalCount} шт.</b>
                     </span>
                     <span>
                        Сумма заказа: <b>{totalPrice}₽</b>
                     </span>
                  </div>
                  <UserForm items={items}/>
                  <div className={s.bottom__buttons}>
                     <Link to="/" className={`${s.goBackBtn} ${s.button}`}>
                        <img src={arrow} alt="arrow" />
                        <span>Вернуться назад</span>
                     </Link>
                     {/* <button className={`${s.payButton} ${s.button}`}>
                        <span>Оплатить сейчас</span>
                     </button> */}
                  </div>
               </div>
               
            </div>
            
         ) : (
            <EmptyCart />
         )}
         
      </div>
   );
};

export default Bucket;
