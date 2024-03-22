import React from "react";
import "./Movie_categories.css";
import Categori from "../../data/Local/Categori";


const CategoriesContainer = ({dataArray}) => {
    return(

            <div className="movie__container_item">
                 {dataArray.map(el => {
                     return(
                         <Categori
                         image = {el.nameImg}
                         text = {el.text}
                         key = {el.id}
                         />
                     )
                 })}

            </div>

    )
}


export default CategoriesContainer