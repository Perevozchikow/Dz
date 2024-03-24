import React from "react";
import "./Genres.css";
import GenresContainer from "../GenresContainer/GenresContainer";



const Genres = ({genresArray}) => {
    return(
        <div className="genres__container_general">
            {genresArray.map(el =>{
                return(
                    <GenresContainer
                        id = {el.id}
                        nameImg = {el.nameImg}
                        text = {el.text}
                        back = {el.backGround}
                    />
                )
            })}
        </div>
    )
}

export default Genres