import React, {useState} from "react";
import {Route, Routes} from "react-router-dom";
import Main from "./Main/Main";
import {catalogBlockArray, bentoArrayPremium, catalogPageArray, bentoArray, strawberryArray, giftsArray, allGiftsArray, bananasArray} from "../data/data";
import CatalogPage from "./CatalogPage/CatalogPage";
import OrderPage from "./OrderPage/OrderPage";
import AboutUsPage from "./AboutUsPage/AboutUsPage";
import Catalog from "./Catalog/Catalog";
import {useInput} from "../utils/ValidationHook";
import {telegramApi} from "../utils/TelegramApi";

function App() {
    const [openInfoOrderSuccess, setOpenInfoOrderSuccess] = useState(false);
    const [openInfoOrderFail, setOpenInfoOrderFail] = useState(false);
    const [openInfo, setOpenInfo] = useState(false);
    const [openOrder, setOpenOrder] = useState(false);
    const name = useInput('', {isEmpty: true, isName: true, minLength: 2});
    const telephone = useInput('', {isEmpty: true, isTelephone: true});

    function closeInfoPopup() {
        setOpenInfo(false);
    }

    function closeOrderPopup() {
        setOpenOrder(false);
    }

    function sendingOrderToTg(message) {
        telegramApi.sendOrder(message)
            .then(() => {
                closeInfoPopup();
                closeOrderPopup();
                setOpenInfoOrderSuccess(true);
            })
            .catch((err) => {
                setOpenInfoOrderFail(true);
                console.log(err);
            })
    }

    function closeOrderInfoPopup() {
        setOpenInfoOrderSuccess(false);
        setOpenInfoOrderFail(false);
    }

    function sendingOrderInfo(message) {
        sendingOrderToTg(message);
    }

    return (
        <Routes>
            <Route path="/" element={<Main catalogBlockArray={catalogBlockArray}/>}/>
            <Route path="/catalog" element={<CatalogPage catalogPageArray={catalogPageArray}/>}/>
            <Route path="/catalog-all"
                   element={<Catalog title="Все подарки" name={name} phone={telephone} openInfo={openInfo}
                                     setOpenInfo={setOpenInfo} openOrder={openOrder} setOpenOrder={setOpenOrder}
                                     closeInfoPopup={closeInfoPopup} closeOrderPopup={closeOrderPopup}
                                     sendingOrderInfo={sendingOrderInfo}
                                     closeOrderInfoPopup={closeOrderInfoPopup} openInfoOrderSuccess={openInfoOrderSuccess}
                                     openInfoOrderFail={openInfoOrderFail}
                                     catalogArray={allGiftsArray}/>}/>
            <Route path="/catalog-strawberry"
                   element={<Catalog title="Клубника в шоколаде" name={name} phone={telephone}
                                     catalogArray={strawberryArray}/>}/>
            <Route path="/catalog-bananas" element={<Catalog title="Бананы в шоколаде" name={name} phone={telephone}
                                                             catalogArray={bananasArray}/>}/>
            <Route path="/catalog-bento"
                   element={<Catalog title="Бенто торт" name={name} phone={telephone} catalogArray={bentoArray}/>}/>
            <Route path="/catalog-bento-premium" element={<Catalog title="Бенто торт" name={name} phone={telephone}
                                                                   catalogArray={bentoArrayPremium}/>}/>
            <Route path="/catalog-gifts" element={<Catalog title="Подарочные наборы" name={name} phone={telephone}
                                                           catalogArray={giftsArray}/>}/>
            <Route path="/order" element={<OrderPage/>}/>
            <Route path="/about-us" element={<AboutUsPage/>}/>
        </Routes>
    );
}

export default App;
