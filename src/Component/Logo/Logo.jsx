import React from "react";
import "./Logo.css";
import VectorImg from "../img/logo.png";


function Logo(){
    return(
        <div className="logo">
            <img src={VectorImg} alt="logo"/>
        </div>
    )
}

export default Logo