import React, { useEffect } from "react";
import Categories from "../../components/Categories/Categories";
import {useDispatch, useSelector} from 'react-redux';
import s from "./Catalog.module.scss";
import { getProducts } from "../../store/slices/productSlice";
import FoodBlock from "../../components/FoodBlock/FoodBlock";

const Catalog = () => {
   const dispatch = useDispatch()
   const items = useSelector((state)=>state.products.products)
   const [activeCategory, setActiveCategory] = React.useState(null)

   
   

useEffect(()=>{
   dispatch(getProducts())
},[dispatch])

   const itemSorts = [
      "Pizza-Trone",
      "mcDonalds",
      "bigBurger",
      "contrabanda",
      "misterCat",
      "gamabc",
   ];

   const onSelectedCategory =
    ((idx) => {
      setActiveCategory(idx)
    });

    const itemsArray = activeCategory === null ? items : items.filter(item => item.category === itemSorts[activeCategory])

    
   return (
      <div className={s.content}>
         <div className={s.container}>
            <div className={s.content__top}>
               <Categories
                  activeCategory={activeCategory}
                  onClickedIt={onSelectedCategory}
                  item={itemSorts}
               />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className={s.wrapper}>
               {items &&
                   itemsArray.map((el) => (
                       <FoodBlock
                          key={el._id}
                          {...el}
                       />
                    ))
                  }
            </div>
         </div>
      </div>
   );
};

export default Catalog;
