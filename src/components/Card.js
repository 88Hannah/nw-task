import React from 'react';

function Card({wine}) {

    const amount = wine.price.toLocaleString('en', {style: 'currency', currency: 'GBP'});

    return (
        <div className="card">
            <div className="card__img">
                <img src={wine.image} alt={wine.name}/>
            </div>
            <div className="card__text">
                <h2 className="wine-name">{wine.name}</h2>
                <p>{amount}</p>
                <button>More Info</button>
                <button>Buy Now</button>
            </div>

        </div>
    )

}

export default Card;