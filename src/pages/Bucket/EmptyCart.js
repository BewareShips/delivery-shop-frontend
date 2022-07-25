import React from "react";
import s from "./Bucket.module.scss";
import { Link } from 'react-router-dom';
import cartEmptyImage from "../../assets/img/empty-cart.png"

function EmptyCart() {
  return (
    <div className={`${s.cart} ${s.empty}`}>
      <h2>
        Корзина пустая <i>😕</i>
      </h2>
      <p>
        Вероятней всего, вы еще не заказывали ничего
        <br />
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
      <img src={cartEmptyImage} alt="Empty cart" />
      <Link to="/" className={`${s.goBackBtn} ${s.button}`}>
        <span>Вернуться назад</span>
      </Link>
    </div>
  );
}

export default EmptyCart;
