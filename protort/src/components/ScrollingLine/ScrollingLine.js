import React from "react";
import "./ScrollingLine.css";
import Marquee from "react-fast-marquee";

function ScrollingLine() {
    return(
        <Marquee className="scroll-container" direction="right" gradient={false}>
            Скидка на первый заказ 10%&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Скидка на первый заказ 10%&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Скидка на первый
            заказ 10%&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Скидка на первый заказ 10%&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Скидка на первый заказ
            10%&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Скидка на первый заказ 10%&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </Marquee>
    )
}

export default ScrollingLine;
