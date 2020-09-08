import React, {useContext} from 'react';
import {Context} from '../Context';
import Card from './Card';

function CardGrid() {

const {allWines} = useContext(Context);
console.log(typeof(allWines))
console.log(allWines)

const wineCards = allWines.map(wine => (
    <Card key={wine.id} wine={wine} />
));

    return (
        <div>
            <p>Lots of cards</p>
            <div className="wine-grid container">
                {wineCards}
            </div>
        </div>
    )
}

export default CardGrid;