import React from "react";
import GradientHorror from "../../Component/Gradient/GradientHorror";
import GradientFantastic from "../../Component/Gradient/GradientFantastic";
import GradientDramas from "../../Component/Gradient/GradientDramas";
import GradientComedy from "../../Component/Gradient/GradientComedy";

import Comedy from "../../img/comedy.png";
import Dramas from "../../img/dramas.png";
import Fantastic from "../../img/fantastic.png";
import Horror from "../../img/Horror.png";


const genresArray = [
    {
        id: 1,
        nameImg: Comedy,
        text: "Comedy",
        backGround: GradientComedy,
    },
    {
        id: 2,
        nameImg: Dramas,
        text: "Dramas",
        backGround: GradientDramas,
    },
    {
        id: 3,
        nameImg: Fantastic,
        text: "Fantastic",
        backGround: GradientFantastic,
    },
    {
        id: 4,
        nameImg: Horror,
        text: "Horror",
        backGround: GradientHorror,
    },

]

export default genresArray