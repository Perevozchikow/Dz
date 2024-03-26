import React from "react";
import "./Logo.css";
import VectorImg from "../../img/logo.png";


function Logo(){
    return(
        <a href="/" className="logo">
            <img src={VectorImg} alt="logo"/>
        </a>
    )
}

export default Logo