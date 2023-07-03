import React from "react";
import {Route, Routes} from "react-router-dom";
import Main from "./Main/Main";
import {catalogBlockArray, catalogPageArray} from "../data/data";
import CatalogPage from "./CatalogPage/CatalogPage";
import OrderPage from "./OrderPage/OrderPage";
import AboutUsPage from "./AboutUsPage/AboutUsPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Main catalogBlockArray={catalogBlockArray}/>}/>
            <Route path="/catalog" element={<CatalogPage catalogPageArray={catalogPageArray}/>}/>
            <Route path="/catalog-all" element={<CatalogPage catalogPageArray={catalogPageArray}/>}/>
            <Route path="/catalog-strawberry" element={<CatalogPage catalogPageArray={catalogPageArray}/>}/>
            <Route path="/catalog-bananas" element={<CatalogPage catalogPageArray={catalogPageArray}/>}/>
            <Route path="/catalog-bento" element={<CatalogPage catalogPageArray={catalogPageArray}/>}/>
            <Route path="/catalog-gifts" element={<CatalogPage catalogPageArray={catalogPageArray}/>}/>
            <Route path="/order" element={<OrderPage/>}/>
            <Route path="/about-us" element={<AboutUsPage/>}/>
        </Routes>
    );
}

export default App;
