import React from "react";
import "./CatalogList.css";
import CatalogItem from "../CatalogItem/CatalogItem";

function CatalogList(props) {
    return (
        <ul className={`catalog__list ${props.class}`}>
            {props.catalogArray.map((catalogItem, index) => (
                <CatalogItem key={index} indx={index} image={catalogItem.image} alt={catalogItem.description}
                             description={catalogItem.description} price={catalogItem.price}/>
            ))}
        </ul>
    )
}

export default CatalogList;
