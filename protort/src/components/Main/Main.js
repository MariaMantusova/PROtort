import React from "react";
import Header from "../Header/Header";
import ScrollingLine from "../ScrollingLine/ScrollingLine";
import ImageBlock from "../ImageBlock/ImageBlock";
import CatalogBlock from "../CatalogBlock/CatalogBlock";
import CakeBlock from "../CakeBlock/CakeBlock";
import AboutUsBlock from "../AboutUsBlock/AboutUsBlock";

function Main(props) {
    return (
        <>
            <ScrollingLine/>
            <Header/>
            <ImageBlock/>
            <CatalogBlock catalogArray={props.catalogBlockArray}/>
            <CakeBlock/>
            <AboutUsBlock/>
        </>
    );
}

export default Main;
