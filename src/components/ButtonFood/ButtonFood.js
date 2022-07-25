import React from "react";

import s from "./ButtonFood.module.scss"

const ButtonFood = ({onClick,addedCount}) => {
  return (
    <button 
    onClick={onClick}
      className={s.button}>
        <span > + Добавить</span>
  {addedCount && <i>{addedCount}</i>}
    </button>
  );
};
export default ButtonFood;