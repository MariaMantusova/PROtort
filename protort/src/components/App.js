const strawberry = require('../images/strawberry-sale.png');

function App() {
    return (
        <div className="App">
            <div className="scroll-container">
                <div className="scroll-container__first-part">
                    <img className="scroll-container__image" src={strawberry} alt="Клубника"/>
                    <p className="scroll-container__text">Скидка 10% на первый заказ</p>
                    <img className="scroll-container__image" src={strawberry} alt="Клубника"/>
                    <p className="scroll-container__text">Скидка 10% на первый заказ</p>
                    <img className="scroll-container__image" src={strawberry} alt="Клубника"/>
                    <p className="scroll-container__text">Скидка 10% на первый заказ</p>
                    <img className="scroll-container__image" src={strawberry} alt="Клубника"/>
                    <p className="scroll-container__text">Скидка 10% на первый заказ</p>
                </div>
                <div className="scroll-container__second-part">
                    <img className="scroll-container__image" src={strawberry} alt="Клубника"/>
                    <p className="scroll-container__text">Скидка 10% на первый заказ</p>
                    <img className="scroll-container__image" src={strawberry} alt="Клубника"/>
                    <p className="scroll-container__text">Скидка 10% на первый заказ</p>
                    <img className="scroll-container__image" src={strawberry} alt="Клубника"/>
                    <p className="scroll-container__text">Скидка 10% на первый заказ</p>
                    <img className="scroll-container__image" src={strawberry} alt="Клубника"/>
                    <p className="scroll-container__text">Скидка 10% на первый заказ</p>
                </div>
            </div>
            <header className="App-header">
            </header>
        </div>
  );
}

export default App;
