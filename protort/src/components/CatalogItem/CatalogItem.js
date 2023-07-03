import React from "react";
import "./CatalogItem.css";
import {Link} from "react-router-dom";

function CatalogItem(props) {
    return(
        <Link to={props.path} className="catalog__link">
            <li className="catalog__item" key={props.index}>
                <img className="item__image" src={props.image} alt={props.alt}/>
                <p className="item__description">{props.description}</p>
                <p className="item__price">от {props.price}р</p>
            </li>
        </Link>
    )
}

export default CatalogItem;
