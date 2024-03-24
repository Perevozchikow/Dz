
import './App.css';
import "./reset.css";


import Header from "./Component/Header/Header";
import Tabs from "./Component/Tabs/Tabs";
import Fire from "./img/icons8-доблесть-48.png";
import Cart from "./Component/Cart/Cart";
import Categories from "../src/data/Local/Categories";
import Genres from "./Component/Genres/Genres";
import GenresArr from "./data/Local/GenresArr";



function App() {
  return (
    <div className="container">
        <Header/>
        <main>
        <Tabs/>
            <section className="new_films">
                <div className="movie__container">
                    <h4 className="new_title"><img src={Fire} alt="fire"/>Новинки</h4>
                    <Cart dataArray = {Categories}/>
                </div>
                <div className="genres__container">
                    <h4 className="new_title">Жанры</h4>
                    <Genres genresArray={GenresArr}/>
                </div>
            </section>
        </main>
    </div>
  );
}

export default App;
