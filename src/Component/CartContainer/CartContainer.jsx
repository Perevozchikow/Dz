import React from "react";
import "./CartContainer.css";


function CartContainer(props){
    return(
        <div className="movie__container_item" id={props.id}>
            <div className="movie__container_img">
                <img src={props.nameImg} alt=""/>
                <div className="movie__container_modal">
                    <p>{props.textHover}</p>
                </div>
            </div>
            <p className="movie__container_text">{props.text}</p>
        </div>
    )
}
export default CartContainer