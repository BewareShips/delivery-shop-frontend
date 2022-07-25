import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, selectCartItemById } from "../../store/slices/cartSlice";
import ButtonFood from "../ButtonFood/ButtonFood";
import s from "./FoodBlock.module.scss";

const FoodBlock = ({
   _id,
   name,
   imageUrl,
   category,
   price,
   //onClickAddFood,addedCount
}) => {
   const dispatch = useDispatch();
   const cartItem = useSelector(selectCartItemById(_id));

   const addedCount = cartItem ? cartItem.count : '';

   const onAddFood = () => {
      const obj = {
         _id,
         name,
         imageUrl,
         price,
         category,
      };
      dispatch(addItem(obj));
      // onClickAddFood(obj)
   };
   return (
      <div className={s.foodBlock}>
         <img className={s.foodBlock__image} src={imageUrl} alt="Food" />
         <h4 className={s.foodBlock__title}>{name}</h4>
         <div></div>
         <div className={s.foodBlock__bottom}>
            <div className={s.foodBlock__price}>от {price} ₴</div>
            <ButtonFood addedCount={addedCount} onClick={onAddFood} />
         </div>
      </div>
   );
};

export default FoodBlock;
