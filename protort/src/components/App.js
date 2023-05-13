import React from "react";
import {Route, Routes} from "react-router-dom";
import Main from "./Main/Main";
import {catalogBlockArray, catalogPageArray} from "../data/data";
import CatalogPage from "./CatalogPage/CatalogPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Main catalogBlockArray={catalogBlockArray}/>}/>
            <Route path="/catalog" element={<CatalogPage catalogPageArray={catalogPageArray}/>}/>
            <Route path="/order" element={<Main/>}/>
            <Route path="/about-us" element={<Main/>}/>
        </Routes>
    );
}

export default App;
