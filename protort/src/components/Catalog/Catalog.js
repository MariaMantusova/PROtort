import React from "react";
import "./Catalog.css";
import Header from "../Header/Header";
import ScrollingLine from "../ScrollingLine/ScrollingLine";
import Footer from "../Footer/Footer";
import Gift from "../Gift/Gift";

function Catalog(props) {
    return (
        <>
            <ScrollingLine/>
            <Header/>
            <section className="gifts">
                <h1 className="gifts__title">{props.title}</h1>
                <ul className="gifts__list">
                    {props.catalogArray.map((catalogItem, index) => (
                        <Gift key={index} indx={index} name={props.name} phone={props.phone} openInfo={props.openInfo}
                              setOpenInfo={props.setOpenInfo} openOrder={props.openOrder}
                              setOpenOrder={props.setOpenOrder} catalogItem={catalogItem}
                              closeInfoPopup={props.closeInfoPopup} closeOrderPopup={props.closeOrderPopup}
                              sendingOrderInfo={props.sendingOrderInfo}
                              closeOrderInfoPopup={props.closeOrderInfoPopup}
                              openInfoOrderSuccess={props.openInfoOrderSuccess}
                              openInfoOrderFail={props.openInfoOrderFail}
                        />
                    ))}
                </ul>
            </section>
            <Footer/>
        </>
    )
}

export default Catalog;
