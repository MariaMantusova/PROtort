import React from "react";
import bentoImage from "../images/bento-catalog.jpg";
import strawberryImage from "../images/strawberry-catalog.jpg";
import bananaImage from "../images/banana-catalog.jpeg";
import setImage from "../images/set-catalog.jpg";
import allImage from "../images/all-catalog.jpg";
import bananas8 from "../images/bananas-8.jpeg";
import bentoBerry from "../images/bento-berry.jpeg";
import bentoCaramel from "../images/bento-caramel.jpeg";
import bentoSnikers from "../images/bento-snikers.jpeg";
import bentoBirthday from "../images/bento-birthday.jpeg";
import bentoHello from "../images/bento-hello.jpeg";
import bento14 from "../images/bento-14.jpeg";
import bentoHeart from "../images/bento-heart.jpeg";
import bentoStrawberry from "../images/bento-strawberry.jpeg";
import bentoTruffle from "../images/bento-truffle.jpeg";
import cakePopsGift from "../images/cake-pops-gift.jpeg";
import bentoPremium from "../images/bento-premium.jpeg";
import eskimo4 from "../images/eskimo-4.jpeg";
import eskimoWhite from "../images/eskimo-white.jpeg";
import strawberry6 from "../images/strawberry-6.jpeg";
import strawberry20 from "../images/strawberry-20.jpeg";

const catalogBlockArray = [
    {
        image: bentoImage,
        price: 1050,
        description: 'Бенто торт',
        path: '/catalog-bento',
    },
    {
        image: setImage,
        price: 1200,
        description: 'Сладкие наборы',
        path: '/catalog-gifts',
    },
    {
        image: bananaImage,
        price: 700,
        description: 'Бананы в шоколаде',
        path: '/catalog-bananas',
    },
    {
        image: strawberryImage,
        price: 550,
        description: 'Клубника в шоколаде',
        path: '/catalog-strawberry',
    }
]

const catalogPageArray = [
    {
        image: allImage,
        price: 550,
        description: 'Все подарки',
        path: '/catalog-all',
    },
    {
        image: strawberryImage,
        price: 550,
        description: 'Клубника в шоколаде',
        path: '/catalog-strawberry',
    },
    {
        image: bentoImage,
        price: 1050,
        description: 'Бенто торт',
        path: '/catalog-bento',
    },
    {
        image: bananaImage,
        price: 700,
        description: 'Бананы в шоколаде',
        path: '/catalog-bananas',
    },
    {
        image: setImage,
        price: 1200,
        description: 'Праздничные наборы',
        path: '/catalog-gifts',
    },
]

const bentoArray = [
    {
        image: bentoSnikers,
        price: 1250,
        weight: "450 - 550",
        descriptionShort: "Бенто-торт «Сникерс»\n",
        descriptionAll: "Влажные, насыщенные шоколадные бисквиты, тянущаяся карамель, обжаренный арахис, шоколадный крем-чиз, сливочный крем с арахисовой пастой.",
    },
    {
        image: bentoBerry,
        price: 1250,
        weight: 500,
        descriptionShort: "Бенто-торт «Ягодный»\n",
        descriptionAll: "Нежные ванильные бисквиты, насыщенная ягодная начинка (вишня, смородина), воздушный крем-чиз.",
    },
    {
        image: bentoCaramel,
        price: 1250,
        weight: 500,
        descriptionShort: "Бенто-торт «Банан-карамель»\n",
        descriptionAll: "Вванильные/Шоколадные бисквиты, карамелизированный банан, сливочный крем.",
    },
    {
        image: bentoTruffle,
        price: 1450,
        weight: "до 550",
        descriptionShort: "Бенто-торт «Шоколадный Трюфель»\n",
        descriptionAll: "Влажные шоколадные бисквиты, ганаш на молочном бельгийском шоколаде.",
    },
];

const strawberryArray = [
    {
        image: strawberry6,
        price: 900,
        count: 6,
        descriptionShort: "Клубника в шоколаде 6 штук",
        descriptionAll: "Спелая, вкусная клубника, покрытая бельгийским шоколадом.",
    },
    {
        image: strawberry20,
        price: 2450,
        count: 20,
        descriptionShort: "Клубника в шоколаде 20 штук",
        descriptionAll: "Спелая, вкусная клубника, покрытая бельгийским шоколадом.",
    },

];

const allGiftsArray = [
    {
        image: strawberry6,
        price: 900,
        count: 6,
        descriptionShort: "Клубника в шоколаде 6 штук",
        descriptionAll: "Спелая, вкусная клубника, покрытая бельгийским шоколадом.",
    },
    {
        image: strawberry20,
        price: 2450,
        count: 20,
        descriptionShort: "Клубника в шоколаде 20 штук",
        descriptionAll: "Спелая, вкусная клубника, покрытая бельгийским шоколадом.",
    },
    {
        image: bananas8,
        price: 1050,
        weight: "до 550",
        descriptionShort: "Бананы в шоколаде 8 штук",
        descriptionAll: "Нежные бананы в молочном бельгийском шоколаде",
    },
    {
        image: eskimo4,
        price: 1250,
        weight: "до 500",
        descriptionShort: "Набор «Эскимо в шоколаде»\n",
        descriptionAll: "Всем знакомая, из детства - «Картошка», покрытая молочным бельгийским шоколадом",
    },
    {
        image: eskimoWhite,
        price: 1250,
        weight: "до 550",
        descriptionShort: "Набор «Эскимо в белом шоколаде»\n",
        descriptionAll: "Всем знакомая, из детства - «Картошка», покрытая белым бельгийским шоколадом",
    },
    {
        image: cakePopsGift,
        price: 1250,
        weight: "до 550",
        descriptionShort: "Набор «Подарочный»\n",
        descriptionAll: "Всем знакомая, из детства - «Картошка», покрытая белым бельгийским шоколадом и нежные бананы в молочном бельгийском шоколаде",
    },
    {
        image: bentoBirthday,
        price: 1250,
        weight: "450 - 550",
        descriptionShort: "Бенто-торт «Happy Birthday»\n",
        descriptionAll: "Цвет торта и надпись зависит от вашего желания. Начинка на выбор.",
    },
    {
        image: bento14,
        price: 1250,
        weight: 500,
        descriptionShort: "Бенто-торт «14 лет выдержки»\n",
        descriptionAll: "Возраст и цвет торта зависит от вашего желания. Начинка на выбор.",
    },
    {
        image: bentoHello,
        price: 1250,
        weight: 500,
        descriptionShort: "Бенто-торт «Hello»\n",
        descriptionAll: "Актуальный декор для дня рождения, цвет и возраст по вашему желанию. Начинка на выбор",
    },
    {
        image: bentoPremium,
        price: 1600,
        weight: "до 600",
        descriptionShort: "Бенто-торт «Нежность Премиум»\n",
        descriptionAll: "Нежный декор торта с цветами из белого бельгийского шоколада. Начинка на выбор.",
    },
    {
        image: bentoStrawberry,
        price: 1500,
        weight: "до 550",
        descriptionShort: "Бенто-торт «Клубничный Люкс»\n",
        descriptionAll: "Летний декор торта, с трендовым кремовым декором и свежей клубникой. Начинка на выбор.",
    },
    {
        image: bentoHeart,
        price: 1250,
        weight: "до 550",
        descriptionShort: "Бенто-торт «Сердце»\n",
        descriptionAll: "Идеальный вариант для подарка любимому человеку, цвет можно заменить и добавить надпись. Начинка на выбор.",
    },
];

const bananasArray = [
    {
        image: bananas8,
        price: 1050,
        weight: "до 550",
        descriptionShort: "Бананы в шоколаде 8 штук",
        descriptionAll: "Нежные бананы в молочном бельгийском шоколаде",
    },
];

const giftsArray = [
    {
        image: eskimo4,
        price: 1250,
        weight: "до 500",
        descriptionShort: "Набор «Эскимо в шоколаде»\n",
        descriptionAll: "Всем знакомая, из детства - «Картошка», покрытая молочным бельгийским шоколадом",
    },
    {
        image: eskimoWhite,
        price: 1250,
        weight: "до 550",
        descriptionShort: "Набор «Эскимо в белом шоколаде»\n",
        descriptionAll: "Всем знакомая, из детства - «Картошка», покрытая белым бельгийским шоколадом",
    },
    {
        image: cakePopsGift,
        price: 1250,
        weight: "до 550",
        descriptionShort: "Набор «Подарочный»\n",
        descriptionAll: "Всем знакомая, из детства - «Картошка», покрытая белым бельгийским шоколадом и нежные бананы в молочном бельгийском шоколаде",
    },
];

export {catalogBlockArray, catalogPageArray};
