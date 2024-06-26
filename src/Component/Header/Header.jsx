import React from "react";
import "./Header.css";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";


function Header(){
    return(
        <header className="header_container">
            <Logo/>
            <form action="/" method="get" className="search_container">
                <input type="text" id="#search" placeholder="Поиск..." className="input_search"/>
                <button className="btn_search">Найти</button>
            </form>
            <Button/>
        </header>
    )
}

export default Header