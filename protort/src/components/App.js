import React from "react";
import {Route, Routes} from "react-router-dom";
import Main from "./Main/Main";
import {catalogBlockArray, catalogPageArray, bentoArray, strawberryArray, giftsArray, allGiftsArray, bananasArray} from "../data/data";
import CatalogPage from "./CatalogPage/CatalogPage";
import OrderPage from "./OrderPage/OrderPage";
import AboutUsPage from "./AboutUsPage/AboutUsPage";
import Catalog from "./Catalog/Catalog";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Main catalogBlockArray={catalogBlockArray}/>}/>
            <Route path="/catalog" element={<CatalogPage catalogPageArray={catalogPageArray}/>}/>
            <Route path="/catalog-all" element={<Catalog title="Все подарки" catalogArray={allGiftsArray}/>}/>
            <Route path="/catalog-strawberry" element={<Catalog title="Клубника в шоколаде" catalogArray={strawberryArray}/>}/>
            <Route path="/catalog-bananas" element={<Catalog title="Бананы в шоколаде" catalogArray={bananasArray}/>}/>
            <Route path="/catalog-bento" element={<Catalog title="Бенто торт" catalogArray={bentoArray}/>}/>
            <Route path="/catalog-gifts" element={<Catalog title="Подарочные наборы" catalogArray={giftsArray}/>}/>
            <Route path="/order" element={<OrderPage/>}/>
            <Route path="/about-us" element={<AboutUsPage/>}/>
        </Routes>
    );
}

export default App;
