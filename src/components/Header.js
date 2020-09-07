import React from 'react';

function Header() {

    return (
        <header>
            
            <h1>Sangar's Wines</h1>

            <div className="basket">
                <p className="basket__number">0</p>
                <i className="fas fa-shopping-basket basket__img"></i>
            </div>
            <nav className="nav">
                <ul className="nav__links">
                    <li className="nav__item"><a className="nav__link" href="#">Home</a></li>
                    <li className="nav__item"><a className="nav__link" href="#">About</a></li>
                    <li className="nav__item"><a className="nav__link" href="#">Wines</a></li>
                    <li className="nav__item"><a className="nav__link" href="#">Contact</a></li>
                </ul>
            </nav>


        </header>

    )

}

export default Header;