
import './App.css';
import "./reset.css";
import router from "./Helpers/router";
import {RouterProvider} from "react-router-dom";





function App() {
  return (
<RouterProvider router={router}/>
  );
}

export default App;
