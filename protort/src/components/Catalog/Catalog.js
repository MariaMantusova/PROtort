import React from "react";
import "./Catalog.css";
import Header from "../Header/Header";
import ScrollingLine from "../ScrollingLine/ScrollingLine";
import Footer from "../Footer/Footer";
import Gift from "../Gift/Gift";
import GiftInfoPopup from "../GiftInfoPopup/GiftInfoPopup";

function Catalog(props) {
    return (
        <>
            <ScrollingLine/>
            <Header/>
            <section className="gifts">
                <h1 className="gifts__title">{props.title}</h1>
                <ul className="gifts__list">
                    {props.catalogArray.map((catalogItem, index) => (
                        <Gift key={index} indx={index} catalogItem={catalogItem}/>
                    ))}
                </ul>
            </section>
           <Footer/>
       </>
    )
}

export default Catalog;
