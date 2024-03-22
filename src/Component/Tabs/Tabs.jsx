import React from "react";
import "./Tabs.css";


function Tabs(){
    return(
        <div className="tabs_container">
            <a href="/" className="tabs_container__link tabs_container__link_active">Фильмы</a>
            <a href="/" className="tabs_container__link">Телеканалы</a>
        </div>
    )
}

export default Tabs