import React, {useState, useContext} from 'react';
import {Context} from '../Context';

function Header() {

    const [toggleState, setToggleState] = useState("");
    
    const {basket} = useContext(Context);

    const handleClick = () => {
        setToggleState(prevState => (
            prevState === "open" ? "close" : "open"
        ))
    }

    var basketTotal = 0;
    basket.forEach(wine => {
        basketTotal += wine.price;
    });

    const basketPrice = basketTotal.toLocaleString('en', {style: 'currency', currency: 'GBP'});

    return (
        <header>
            
            <h1><a href="/">Sangar's Wines</a></h1>

            <nav className={`nav ${toggleState}`}>
                <ul className="nav__links">
                    <li className="nav__item"><a className="nav__link" href="#">Home</a></li>
                    <li className="nav__item"><a className="nav__link" href="#">About</a></li>
                    <li className="nav__item"><a className="nav__link" href="#">Wines</a></li>
                    <li className="nav__item"><a className="nav__link" href="#">Contact</a></li>
                </ul>
            </nav>

            <div className="basket">
                {basketTotal !== 0 ? <p className="basket__number">{basketPrice}</p> : null}
                <i className="fas fa-shopping-basket basket__img"></i>
            </div>

            <div className={`nav-toggle ${toggleState}`} onClick={handleClick}>
                <span className="nav-toggle__line"></span>
                <span className="nav-toggle__line"></span>
                <span className="nav-toggle__line"></span>
            </div>

            


        </header>

    )

}

export default Header;