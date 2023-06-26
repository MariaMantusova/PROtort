import React from "react";
import "./AboutUsPage.css";
import ScrollingLine from "../ScrollingLine/ScrollingLine";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import photoAboutUs from "../../images/block-about-us-photo.jpg";

function AboutUsPage() {
    return(
        <>
            <ScrollingLine/>
            <Header/>
            <section className="about-us-page">
                <h1 className="about-us-page__title">Наша история</h1>
                {/*<article className="about-us-page__history-block">*/}
                {/*    <img className="history-block__image"/>*/}
                {/*    <h2 className="history-block__title">Как все начиналось</h2>*/}
                {/*    <p className="history-block__text"></p>*/}
                {/*</article>*/}
                <article className="about-us-page__author-block">
                    <img className="author-block__image" src={photoAboutUs} alt="Фото владельца студии"/>
                    <div className="author-block__text-container">
                        <h2 className="author-block__title">Немного обо мне</h2>
                        <p className="author-block__text">Меня зовут Марина и я влюбляю вас в мой сладкий мир!</p>
                        <p className="author-block__text"> Создаю десерты на заказ в течении 2 лет, а готовлю их всю
                            свою
                            сознательную жизнь.</p>
                        <p className="author-block__text"> Прошла несколько кондитерских курсов и изучила огромное
                            количество тех карт по созданию тортов и десертов. Вывела свои самые лучшие и вкусные
                            рецепты,
                            которыми делюсь с вами. У меня не только вкусно но ещё и очень красиво, так как фотографией
                            я
                            увлекаюсь больше 10 лет.
                        </p>
                        <p className="author-block__text"> Видеть красоту в моем деле немаловажно, поэтому мой пазл складывается из таких
                            составляющих:</p>
                        <ul className="author-block__list">
                            <li className="author-block__li">Качество</li>
                            <li className="author-block__li">Вкус</li>
                            <li className="author-block__li">Красота</li>
                        </ul>
                    </div>
                </article>
            </section>
            <Footer/>
        </>
    )
}

export default AboutUsPage;
