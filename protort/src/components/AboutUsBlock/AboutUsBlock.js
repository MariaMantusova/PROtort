import React from "react";
import "./AboutUsBlock.css";
import photoAboutUs from "../../images/block-about-us-photo.jpg";

function AboutUsBlock() {
    return(
        <section className="about-us">
            <img className="about-us__photo" src={photoAboutUs} alt="фото руководителя студии"/>
            <div className="about-us__container">
                <h2 className="about-us__header">О нас</h2>
                <p className="about-us__info">Меня зовут Марина - я создатель вкусных и красивых десертов.
                    На протяжении последних лет, я жила и творила в Севастополе, набрала своих клиентов и работала.
                    Однако, в определенный момент жизнь повернулась и теперь я здесь - в Макеевке.
                    И я хочу развивать
                    здесь кондитерскую индустрию, а также продолжать развиваться самой и творить вкусные десерты.</p>
            </div>
        </section>
    )
}

export default AboutUsBlock;
