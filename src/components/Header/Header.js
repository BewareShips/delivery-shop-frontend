/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.scss"
import ButtonCart from "../ButtonCart/ButtonCart";

const Header = () => {
   const activeStyles = {
      color: "#FFF",
      textDecoration: 'none'
   };

   const restStyles = {
    color: '#828282',
    textDecoration: 'none'
   }
   return (
      <header className="text-white bg-dark py-3">
         <div className="container d-flex justify-content-between">
            <span className={s.logo}>
               DELIVERY SHOP
            </span>
            <nav className={s.buttonNavlinks}>
               <NavLink
                  to="/"
                  className="mr-3"
                  style={({ isActive }) =>
                     isActive ? activeStyles : restStyles
                  }
               >
                  Main
               </NavLink>
                  <ButtonCart/>
            </nav>
         </div>
      </header>
   );
};

export default Header;
