import React, {useState} from 'react';

function Card({wine}) {

    const [tooltipVisibility, setTooltipVisibility] = useState("hidden")

    const amount = wine.price.toLocaleString('en', {style: 'currency', currency: 'GBP'});

    var wineColour = "";

    if(wine.type === "red") {
        wineColour = "#8d001f"
    } else if (wine.type === "white") {
        wineColour = "#e4ce6c"
    } else if (wine.type === "rose") {
        wineColour = "#ffd1d8"
    } else if (wine.type === "sparkling") {
        wineColour = "#b3955f"
    } else {
        wineColour = "grey"
    }

    const handleMouseEnter = () => {
        setTooltipVisibility("visible");
    };

    const handleMouseLeave = () => {
        setTooltipVisibility("hidden");
    };



    return (
        <div className="card">
            <div className="card__img">
                <img src={wine.image} alt={wine.name}/>
            </div>
            <div className="card__text">
                <h2 className="wine-name">{wine.name}</h2>
                <div className="wine-details">
                    <p>{amount} a bottle</p>
                    <div className="wine-glass-container">
                        <i 
                            className="fas fa-wine-glass-alt wine-glass" 
                            style={{color:wineColour}} 
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        ></i>
                        <span className="wine-glass-tooltip" style={{visibility:tooltipVisibility}}>{wine.type}</span>
                    </div>
                </div>
                <div className="card__buttons">
                    <button>More Info</button>
                    <button>Buy Now</button>
                </div>
            </div>

        </div>
    )

}

export default Card;