import React from "react";
import "./CartContainer.css";


function CartContainer(props){
    return(
        <div className="movie__container_cart">
            <div className="movie__container_img">
                <img src={props.nameImg} alt=""/>
            </div>
            <p className="movie__container_text">{props.text}</p>
        </div>
    )
}
export default CartContainer