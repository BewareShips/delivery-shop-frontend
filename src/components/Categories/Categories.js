import React from "react";
import s from "./Categories.module.scss";

function Categories({activeCategory, item,onClickedIt }) {
  
 
  return (
    <div className={s.categories}>
      <ul className={s.categories__list}>
        <li className={activeCategory === null  ? s.active : ""}
            onClick={() => onClickedIt(null)}>Все</li>
        {item && 
          item.map((name, idx) => (
          <li
            className={activeCategory === idx  ? s.active : ""}
            onClick={() => onClickedIt(idx)}
            key={`${name}_${idx}`}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;