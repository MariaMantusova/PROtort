import React from "react";
import "./CatalogPage.css";
import ScrollingLine from "../ScrollingLine/ScrollingLine";
import Header from "../Header/Header";
import CatalogList from "../CatalogList/CatalogList";
import Footer from "../Footer/Footer";

function CatalogPage(props) {
    return(
        <>
            <ScrollingLine/>
            <Header/>
            <section className="catalog-page">
                <h1 className="catalog-page__title">Каталог подарков</h1>
                <CatalogList catalogArray={props.catalogPageArray} class="catalog__list_type_page"/>
            </section>
            <Footer/>
        </>
    )
}

export default CatalogPage;
