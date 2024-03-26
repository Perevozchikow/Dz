import React from "react";
import "./Footer.css";
import FooterImg from "../../img/footer.png";

function Footer(){
    return(
        <div className="footer_container">
        <section className="basement">
                <div className="img_footer">
                    <img src={FooterImg} alt=""/>
                </div>
            <div className="text_footer">
                <p>426057, Россия, Удмуртская Республика, г. Ижевск, ул. Карла Маркса, 246 (ДК «Металлург»)</p>
                <p>+7 (3412) 93-88-61, 43-29-29</p>
                <p className="text_address">htc-cs.ru</p>
            </div>
        </section>
        </div>
    )
}


export default Footer