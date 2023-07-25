import React from "react";
import bentoImage from "../images/bento-catalog.jpg";
import strawberryImage from "../images/strawberry-catalog.jpg";
import bananaImage from "../images/banana-catalog.jpeg";
import setImage from "../images/set-catalog.jpg";
import allImage from "../images/all-catalog.jpg";
import bananas8 from "../images/bananas-8.jpeg";
import bentoBerry from "../images/bento-berry.jpeg";
import bentoSnikers from "../images/bento-snikers.jpeg";
import bentoBirthday from "../images/bento-birthday.jpeg";
import bentoHello from "../images/bento-hello.jpeg";
import bento14 from "../images/bento-14.jpeg";
import bentoHeart from "../images/bento-heart.jpg";
import bentoStrawberry from "../images/bento-strawberry.jpeg";
import bentoTruffle from "../images/bento-truffle.jpeg";
import cakePopsGift from "../images/cake-pops-gift.jpeg";
import bentoPremium from "../images/bento-premium.jpeg";
import eskimo4 from "../images/eskimo-4.jpeg";
import eskimoWhite from "../images/eskimo-white.jpeg";
import strawberry6 from "../images/strawberry-6.jpeg";
import strawberry20 from "../images/strawberry-20.jpeg";
import bentoBananCaramel from "../images/bento-banan&caramel.png";
import bentoHello30 from "../images/bento-hello-30.jpeg";
import bentoInfinityInLove from "../images/bento-infinity-in-love.jpg";
import bentoHeartRythm from "../images/bento-heart-rythm.jpg";
import bentoStrawberryPremium from "../images/main-photo5.jpg";

const catalogBlockArray = [
    {
        image: bentoInfinityInLove,
        price: 1250,
        description: 'Бенто торт',
        path: '/catalog-bento',
    },
    {
        image: setImage,
        price: 1250,
        description: 'Сладкие наборы',
        path: '/catalog-gifts',
    },
    {
        image: strawberryImage,
        price: 900,
        description: 'Клубника в шоколаде',
        path: '/catalog-strawberry',
    },
    {
        image: bentoImage,
        price: 1550,
        description: 'Бенто торт',
        path: '/catalog-bento-premium',
    },
]

const catalogPageArray = [
    {
        image: allImage,
        price: 900,
        description: 'Все подарки',
        path: '/catalog-all',
    },
    {
        image: strawberryImage,
        price: 900,
        description: 'Клубника в шоколаде',
        path: '/catalog-strawberry',
    },
    {
        image: bentoInfinityInLove,
        price: 1250,
        description: 'Бенто торт',
        path: '/catalog-bento',
    },
    {
        image: bentoImage,
        price: 1550,
        description: 'Бенто торт',
        path: '/catalog-bento-premium',
    },
    {
        image: bananaImage,
        price: 900,
        description: 'Бананы в шоколаде',
        path: '/catalog-bananas',
    },
    {
        image: setImage,
        price: 1250,
        description: 'Праздничные наборы',
        path: '/catalog-gifts',
    },
]

const bentoTastesArray = [
    {
        image: bentoSnikers,
        price: 1250,
        weight: "450 - 550 грамм",
        descriptionShort: "Бенто-торт «Сникерс»\n",
        descriptionAll: "Влажные, насыщенные шоколадные бисквиты, тянущаяся карамель, обжаренный арахис, шоколадный крем-чиз, сливочный крем с арахисовой пастой.",
        measureType: "Вес: ",
    },
    {
        image: bentoBerry,
        price: 1250,
        weight: "500 грамм",
        descriptionShort: "Бенто-торт «Ягодный»\n",
        descriptionAll: "Нежные ванильные бисквиты, насыщенная ягодная начинка (вишня, смородина), воздушный крем-чиз.",
        measureType: "Вес: ",
    },
    {
        image: bentoBananCaramel,
        price: 1250,
        weight: "500 грамм",
        descriptionShort: "Бенто-торт «Банан-карамель»\n",
        descriptionAll: "Вванильные/Шоколадные бисквиты, карамелизированный банан, сливочный крем.",
        measureType: "Вес: ",
    },
    {
        image: bentoTruffle,
        price: 1450,
        weight: "до 550 грамм",
        descriptionShort: "Бенто-торт «Шоколадный Трюфель»\n",
        descriptionAll: "Влажные шоколадные бисквиты, ганаш на молочном бельгийском шоколаде.",
        measureType: "Вес: ",
    },
];

const bentoArray = [
    {
        image: bentoBirthday,
        price: 1250,
        weight: "450 - 550 грамм",
        descriptionShort: "Бенто-торт «Happy Birthday»\n",
        descriptionAll: "Цвет торта и надпись зависит от вашего желания. Начинка на выбор.",
        measureType: "Вес: ",
    },
    {
        image: bento14,
        price: 1250,
        weight: "500 грамм",
        descriptionShort: "Бенто-торт «14 лет выдержки»\n",
        descriptionAll: "Возраст и цвет торта зависит от вашего желания. Начинка на выбор.",
        measureType: "Вес: ",
    },
    {
        image: bentoHello,
        price: 1250,
        weight: "500 грамм",
        descriptionShort: "Бенто-торт «Hello 24»\n",
        descriptionAll: "Актуальный декор для дня рождения, цвет и возраст по вашему желанию. Начинка на выбор",
        measureType: "Вес: ",
    },
    {
        image: bentoHello30,
        price: 1250,
        weight: "500 грамм",
        descriptionShort: "Бенто-торт «Hello 30»\n",
        descriptionAll: "Актуальный декор для дня рождения, цвет и возраст по вашему желанию. Начинка на выбор",
        measureType: "Вес: ",
    },
    {
        image: bentoInfinityInLove,
        price: 1250,
        weight: "500 грамм",
        descriptionShort: "Бенто-торт «Буду любить тебя вечность»\n",
        descriptionAll: "Актуальный декор для дня рождения, цвет и возраст по вашему желанию. Начинка на выбор",
        measureType: "Вес: ",
    },
    {
        image: bentoHeartRythm,
        price: 1250,
        weight: "500 грамм",
        descriptionShort: "Бенто-торт «Биение сердца»\n",
        descriptionAll: "Актуальный декор для дня рождения, цвет и возраст по вашему желанию. Начинка на выбор",
        measureType: "Вес: ",
    },
]

const bentoArrayPremium = [
    {
        image: bentoPremium,
        price: 1600,
        weight: "до 600 грамм",
        descriptionShort: "Бенто-торт «Нежность Премиум»\n",
        descriptionAll: "Нежный декор торта с цветами из белого бельгийского шоколада. Начинка на выбор.",
        measureType: "Вес: ",
    },
    {
        image: bentoStrawberry,
        price: 1500,
        weight: "до 550 грамм",
        descriptionShort: "Бенто-торт «Клубничный Люкс»\n",
        descriptionAll: "Летний декор торта, с трендовым кремовым декором и свежей клубникой. Начинка на выбор.",
        measureType: "Вес: ",
    },
    {
        image: bentoHeart,
        price: 1250,
        weight: "до 550 грамм",
        descriptionShort: "Бенто-торт «Сердце»\n",
        descriptionAll: "Идеальный вариант для подарка любимому человеку, цвет можно заменить и добавить надпись. Начинка на выбор.",
        measureType: "Вес: ",
    },
    {
        image: bentoStrawberryPremium,
        price: 1500,
        weight: "до 550 грамм",
        descriptionShort: "Бенто-торт «Клубничное лето»\n",
        descriptionAll: "Летний декор торта, сo свежей клубникой. Начинка на выбор.",
        measureType: "Вес: ",
    },
]

const strawberryArray = [
    {
        image: strawberry6,
        price: 900,
        count: "6 штук",
        descriptionShort: "Клубника в шоколаде 6 штук",
        descriptionAll: "Спелая, вкусная клубника, покрытая бельгийским шоколадом.",
        measureType: "Количество: ",
    },
    {
        image: strawberry20,
        price: 2450,
        count: "20 штук",
        descriptionShort: "Клубника в шоколаде 20 штук",
        descriptionAll: "Спелая, вкусная клубника, покрытая бельгийским шоколадом.",
        measureType: "Количество: ",
    },
];

const allGiftsArray = [
    {
        image: strawberry6,
        price: 900,
        count: "6 штук",
        descriptionShort: "Клубника в шоколаде 6 штук",
        descriptionAll: "Спелая, вкусная клубника, покрытая бельгийским шоколадом.",
        measureType: "Количество: ",
    },
    {
        image: strawberry20,
        price: 2450,
        count: "20 штук",
        descriptionShort: "Клубника в шоколаде 20 штук",
        descriptionAll: "Спелая, вкусная клубника, покрытая бельгийским шоколадом.",
        measureType: "Количество: ",
    },
    {
        image: bananas8,
        price: 1050,
        count: "8 штук",
        descriptionShort: "Бананы в шоколаде 8 штук",
        descriptionAll: "Нежные бананы в молочном бельгийском шоколаде",
        measureType: "Количество: ",
    },
    {
        image: eskimo4,
        price: 1250,
        weight: "до 500 грамм",
        descriptionShort: "Набор «Эскимо в шоколаде»\n",
        descriptionAll: "Всем знакомая, из детства - «Картошка», покрытая молочным бельгийским шоколадом",
        measureType: "Вес: ",
    },
    {
        image: eskimoWhite,
        price: 1250,
        weight: "до 550 грамм",
        descriptionShort: "Набор «Эскимо в белом шоколаде»\n",
        descriptionAll: "Всем знакомая, из детства - «Картошка», покрытая белым бельгийским шоколадом",
        measureType: "Вес: ",
    },
    {
        image: cakePopsGift,
        price: 1250,
        weight: "до 550 грамм",
        descriptionShort: "Набор «Подарочный»\n",
        descriptionAll: "Всем знакомая, из детства - «Картошка», покрытая белым бельгийским шоколадом и нежные бананы в молочном бельгийском шоколаде",
        measureType: "Вес: ",
    },
    {
        image: bentoBirthday,
        price: 1250,
        weight: "450 - 550 грамм",
        descriptionShort: "Бенто-торт «Happy Birthday»\n",
        descriptionAll: "Цвет торта и надпись зависит от вашего желания. Начинка на выбор.",
        measureType: "Вес: ",
    },
    {
        image: bento14,
        price: 1250,
        weight: "500 грамм",
        descriptionShort: "Бенто-торт «14 лет выдержки»\n",
        descriptionAll: "Возраст и цвет торта зависит от вашего желания. Начинка на выбор.",
        measureType: "Вес: ",
    },
    {
        image: bentoHello,
        price: 1250,
        weight: "500 грамм",
        descriptionShort: "Бенто-торт «Hello»\n",
        descriptionAll: "Актуальный декор для дня рождения, цвет и возраст по вашему желанию. Начинка на выбор",
        measureType: "Вес: ",
    },
    {
        image: bentoPremium,
        price: 1600,
        weight: "до 600 грамм",
        descriptionShort: "Бенто-торт «Нежность Премиум»\n",
        descriptionAll: "Нежный декор торта с цветами из белого бельгийского шоколада. Начинка на выбор.",
        measureType: "Вес: ",
    },
    {
        image: bentoStrawberry,
        price: 1500,
        weight: "до 550 грамм",
        descriptionShort: "Бенто-торт «Клубничный Люкс»\n",
        descriptionAll: "Летний декор торта, с трендовым кремовым декором и свежей клубникой. Начинка на выбор.",
        measureType: "Вес: ",
    },
    {
        image: bentoHeart,
        price: 1250,
        weight: "до 550 грамм",
        descriptionShort: "Бенто-торт «Сердце»\n",
        descriptionAll: "Идеальный вариант для подарка любимому человеку, цвет можно заменить и добавить надпись. Начинка на выбор.",
        measureType: "Вес: ",
    },
    {
        image: bentoHello30,
        price: 1250,
        weight: "500 грамм",
        descriptionShort: "Бенто-торт «Hello 30»\n",
        descriptionAll: "Актуальный декор для дня рождения, цвет и возраст по вашему желанию. Начинка на выбор",
        measureType: "Вес: ",
    },
    {
        image: bentoInfinityInLove,
        price: 1250,
        weight: "500 грамм",
        descriptionShort: "Бенто-торт «Буду любить тебя вечность»\n",
        descriptionAll: "Идеальный вариант для подарка любимому человеку, цвет можно заменить и добавить надпись. Начинка на выбор.",
        measureType: "Вес: ",
    },
    {
        image: bentoHeartRythm,
        price: 1250,
        weight: "до 550 грамм",
        descriptionShort: "Бенто-торт «Биение сердца»\n",
        descriptionAll: "Идеальный вариант для подарка любимому человеку, цвет можно заменить и добавить надпись. Начинка на выбор.",
        measureType: "Вес: ",
    },
];

const bananasArray = [
    {
        image: bananas8,
        price: 1050,
        count: "8 штук",
        descriptionShort: "Бананы в шоколаде 8 штук",
        descriptionAll: "Нежные бананы в молочном бельгийском шоколаде",
        measureType: "Количество: ",
    },
];

const giftsArray = [
    {
        image: eskimo4,
        price: 1250,
        weight: "до 500 грамм",
        descriptionShort: "Набор «Эскимо в шоколаде»\n",
        descriptionAll: "Всем знакомая, из детства - «Картошка», покрытая молочным бельгийским шоколадом",
        measureType: "Вес: ",
    },
    {
        image: eskimoWhite,
        price: 1250,
        weight: "до 550 грамм",
        descriptionShort: "Набор «Эскимо в белом шоколаде»\n",
        descriptionAll: "Всем знакомая, из детства - «Картошка», покрытая белым бельгийским шоколадом",
        measureType: "Вес: ",
    },
    {
        image: cakePopsGift,
        price: 1250,
        weight: "до 550 грамм",
        descriptionShort: "Набор «Подарочный»\n",
        descriptionAll: "Всем знакомая, из детства - «Картошка», покрытая белым бельгийским шоколадом и нежные бананы в молочном бельгийском шоколаде",
        measureType: "Вес: ",
    },
];

export {catalogBlockArray, catalogPageArray, bentoArray, strawberryArray, giftsArray, allGiftsArray, bananasArray, bentoArrayPremium};
