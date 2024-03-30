import {createBrowserRouter} from "react-router-dom";
import HomePages from "../pages/HomePages/HomePages";
import TvPages from "../pages/TvPages/TvPages";


const router = createBrowserRouter (
    [
        {
            path: "/",
            element: <HomePages/>,
        },
        {
            path: "/tvPages",
            element: <TvPages/>
        }
    ]
)

export default router