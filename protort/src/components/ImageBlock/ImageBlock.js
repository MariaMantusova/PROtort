import React from "react";
import "./ImageBlock.css";
import MainButton from "../MainButton/MainButton";

function ImageBlock() {
    return(
        <section className="image-block">
            <h1 className="image-block__title">Вкусные подарки в Донецке и Макеевке
                <p className="image-block__subtitle">для себя и родных</p>
            </h1>
            <MainButton class="image-block__button-main"/>
        </section>
    )
}

export default ImageBlock;
