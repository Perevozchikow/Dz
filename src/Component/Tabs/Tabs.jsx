import React from "react";
import "./Tabs.css";
import {NavLink} from "react-router-dom";


function Tabs(){
    return(
        <div className="tabs_container">
            <NavLink to="/" className="tabs_container__link ">Фильмы</NavLink>
            <NavLink to="/tvPages"   className="tabs_container__link ">Телеканалы</NavLink>
        </div>
    )
}

export default Tabs