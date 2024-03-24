import React from "react";
import "./Cart.css";
import CartContainer from "../CartContainer/CartContainer";



 const Cart =({dataArray}) => {
    return( <div className="movie__container_general">
         {dataArray.map(el => {
             return (
                 <CartContainer
                     id={el.id}
                     nameImg={el.nameImg}
                     text={el.text}
                 />
             )
         })}
     </div>
    )
 }

export default Cart
