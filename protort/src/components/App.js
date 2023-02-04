import Marquee from "react-fast-marquee";

function App() {
    return (
        <div className="page">
            <Marquee className="scroll-container" direction="right" gradient={false}>
                Скидка на первый заказ 10%&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Скидка на первый заказ 10%&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Скидка на первый
                заказ 10%&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Скидка на первый заказ 10%&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Скидка на первый заказ
                10%&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Скидка на первый заказ 10%&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Marquee>
            <header className="header">
                <nav className="header__nav">
                    <a className="header__link" href="#">Каталог</a>
                    <a className="header__link" href="#">Заказ</a>
                    <a className="header__link" href="#">О нас</a>
                </nav>
            </header>
        </div>
    );
}

export default App;
