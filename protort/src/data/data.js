import React from "react";
import bentoImage from "../images/bento-catalog.jpg";
import strawberryImage from "../images/strawberry-catalog.jpg";
import bananaImage from "../images/banana-catalog.jpeg";
import setImage from "../images/set-catalog.jpg";

const catalogBlockArray = [
    {
        image: bentoImage,
        price: 1050,
        description: 'Бенто торт',
    },
    {
        image: setImage,
        price: 1200,
        description: 'Сладкие наборы',
    },
    {
        image: bananaImage,
        price: 700,
        description: 'Бананы в шоколаде',
    },
    {
        image: strawberryImage,
        price: 550,
        description: 'Клубника в шоколаде',
    }
]

export {catalogBlockArray};
