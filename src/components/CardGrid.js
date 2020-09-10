import React, {useContext} from 'react';
import {Context} from '../Context';
import Card from './Card';

function CardGrid() {

const {winesToDisplay} = useContext(Context);

const wineCards = winesToDisplay.map(wine => (
    <Card key={wine.id} wine={wine} />
));

    return (
        <section className="main-section container">
            
            {winesToDisplay.length === 0 ? 
                <p className="sorry-message">Sorry, we do not have any wine that matches your search criteria.</p>:          
                <div className="wine-grid">
                    {wineCards}
                </div>
            }
        </section>
    )
}

export default CardGrid;