import React, {useState, useContext} from 'react';
import {Context} from '../Context';

function Card({wine}) {

    const [tooltipVisibility, setTooltipVisibility] = useState("hidden")
    const {currentWine, toggleModal, currentType, toggleBasket, basket} = useContext(Context);

    const amount = wine.price.toLocaleString('en', {style: 'currency', currency: 'GBP'});

    const {wineColour, tooltipText} = currentType(wine.type);

    const handleMouseEnter = () => {
        setTooltipVisibility("visible");
    };

    const handleMouseLeave = () => {
        setTooltipVisibility("hidden");
    };

    const handleClick = () => {
        currentWine(wine.id);
        toggleModal();
    };

    var buttonText = "";
    var basketClass = "";
    const inBasket = basket.some(basketWine => basketWine.id === wine.id);
    if (inBasket) {
        buttonText = "Remove";
        basketClass = "in-basket"
    } else if (!inBasket) {
        buttonText = "Add to basket";
        basketClass = "not-in-basket";
    }
    
    return (
        <div className="card">
            <div className="card__img">
                <img src={wine.image} alt={wine.name}/>
            </div>
            <h2 className="wine-name card__details">{wine.name}</h2>
            <div className="card__details--bottom card__details">
                <div className="wine-details">
                    <p>{amount} a bottle</p>
                    <div className="wine-glass-container">
                        <i 
                            className="fas fa-wine-glass-alt wine-glass" 
                            style={{color:wineColour}} 
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        ></i>
                        <span 
                            className="wine-glass-tooltip" 
                            style={{visibility:tooltipVisibility}}
                        >{tooltipText}</span>
                    </div>
                </div>
                <div className="card__buttons">
                    <button onClick={handleClick}>More Info</button>
                    <button className={basketClass} onClick={() => toggleBasket(wine.id)}>{buttonText}</button>
                </div>
            </div>
        </div>
    )

}

export default Card;