import React from "react";
import "./ImageBlock.css";
import {Link} from "react-router-dom";

function ImageBlock() {
    return(
        <section className="image-block">
            <h1 className="image-block__title">Вкусные подарки в Донецке и Макеевке</h1>
            <p className="image-block__subtitle">для себя и родных</p>
            <Link to="/catalog" className="image-block__button">
                <p  className="image-block__button-text">выбрать подарок</p>
            </Link>
        </section>
    )
}

export default ImageBlock;
