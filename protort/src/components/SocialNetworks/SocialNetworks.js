import React from "react";
import "./SocialNetworks.css";
import SocialNetwork from "../SocialNetwork/SocialNetwork";
import vkIcon from "../../images/vk.svg";
import telegramIcon from "../../images/telegramm.svg";
import instIcon from "../../images/instagram.svg";
import whatsappIcon from "../../images/whatsapp.svg";

function SocialNetworks() {
    return (
        <section className="social-networks">
            <h2 className="social-networks__title">Следите за нами в социальных сетях</h2>
            <ul className="social-networks__list">
                <SocialNetwork class="social-network__black" href="https://vk.com/club189152412" icon={vkIcon}
                               alt="вконтакте ссылка и лого"/>
                <SocialNetwork class="social-network__brown" href="https://t.me/marina_pro_tort" icon={telegramIcon}
                               alt="телеграм ссылка и лого"/>
                <SocialNetwork class="social-network__black"
                               href="https://instagram.com/marina_pro_tort?igshid=NTc4MTIwNjQ2YQ==" icon={instIcon}
                               alt="инстаграм ссылка и лого">
                    <p className="social-network__span">*запрещенная в РФ организация</p>
                </SocialNetwork>
                <SocialNetwork class="social-network__brown" href="#" icon={whatsappIcon}
                               alt="вотсапп ссылка и лого"/>
            </ul>
        </section>
    )
}

export default SocialNetworks;
