import React, {useState} from 'react';


function Header() {

    const [toggleState, setToggleState] = useState("");
    
    
    const handleClick = () => {
        setToggleState(prevState => (
            prevState === "open" ? "close" : "open"
        ))
    }


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
                <p className="basket__number">0</p>
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