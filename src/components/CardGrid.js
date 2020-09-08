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
            {wineCards}
        </div>
    )
}

export default CardGrid;