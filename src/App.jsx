
import './App.css';
import "./reset.css";


import Header from "./Component/Header/Header";
import Tabs from "./Component/Tabs/Tabs";
import Fire from "./Component/img/icons8-доблесть-48.png";
import CategoriesContainer from "./Component/Movie-categories/Movie_categories";
import Categori from "./data/Local/Categori";



function App() {
  return (
    <div className="container">
        <Header/>
        <main>
        <Tabs/>
            <section className="new_films">
                <h4 className="new_title"><img src={Fire} alt="fire"/>Новинки</h4>
                <div className="movie__container">
                <CategoriesContainer dataArray={Categori}/>
                <CategoriesContainer dataArray={Categori}/>
                <CategoriesContainer dataArray={Categori}/>
                <CategoriesContainer dataArray={Categori}/>
                </div>
            </section>
        </main>
    </div>
  );
}

export default App;
