import React from "react";
import "./GenresContainer.css";
//import GenresBackground from "./GenresBackground/GenresBackground";


function GenresContainer(props){
    return(
        <div className="genres__container_item" style = {{`background: ${props.back}`}}>
            <div className="container_img">
                <img src={props.nameImg} alt=""/>
            </div>
            <p className="container_text">{props.text}</p>
        </div>
    )
}
export default GenresContainer