import React from "react";
import Header from "../Header/Header";

export const Layout = ({ children }) => {
   return (
      <React.Fragment>
         <div>
            <Header />
            <div className="container mx-auto">{children}</div>
         </div>
      </React.Fragment>
   );
};
