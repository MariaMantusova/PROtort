import React from "react";
import "./CatalogItem.css";

function CatalogItem(props) {
    return(
        <li className="catalog__item" key={props.key}>
            <img className="item__image" src={props.image} alt={props.alt}/>
            <p className="item__description">{props.description}</p>
            <p className="item__price">от {props.price}р</p>
        </li>
    )
}

export default CatalogItem;
