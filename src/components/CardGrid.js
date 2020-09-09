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
        <section className="main-section container">
            <div className="wine-grid">
                {wineCards}
            </div>
        </section>
    )
}

export default CardGrid;