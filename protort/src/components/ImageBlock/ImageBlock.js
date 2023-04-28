import React from "react";
import "./ImageBlock.css";
import MainButton from "../MainButton/MainButton";

function ImageBlock() {
    return(
        <section className="image-block">
            <h1 className="image-block__title">Вкусные подарки в Донецке и Макеевке</h1>
            <p className="image-block__subtitle">для себя и родных</p>
            <MainButton/>
        </section>
    )
}

export default ImageBlock;
