import React from "react";
import Header from "../Header/Header";
import ScrollingLine from "../ScrollingLine/ScrollingLine";
import ImageBlock from "../ImageBlock/ImageBlock";
import CatalogBlock from "../CatalogBlock/CatalogBlock";

function Main(props) {
    return (
        <>
            <ScrollingLine/>
            <Header/>
            <ImageBlock/>
            <CatalogBlock catalogArray={props.catalogBlockArray}/>
        </>
    );
}

export default Main;
