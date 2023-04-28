import React from "react";
import "./CatalogBlock.css";
import CatalogList from "../CatalogList/CatalogList";

function CatalogBlock(props) {
    return(
        <section className="catalog">
            <h2 className="catalog__header">Каталог товаров</h2>
            <CatalogList catalogArray={props.catalogArray}/>
        </section>
    )
}

export default CatalogBlock;
