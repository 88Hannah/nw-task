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

            <div className="modal">
                <h2 className="modal__wine-name">Red Red wine</h2>
                <div className="modal__img">
                    <img src="https://d1sixo6y2intz2.cloudfront.net/images/merchandising/content/wines/edgard-carter-sureno-2018/background.jpg" alt="" />
                </div>
                <p className="modal__price">£13.99 a bottle</p>
                <div className="modal__description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra posuere orci, sed feugiat leo pharetra sit amet. Praesent metus metus, venenatis eget cursus sit amet, bibendum eu purus. Donec ullamcorper volutpat lobortis. </p>
                    <p>Aenean hendrerit sodales mauris sed feugiat. Donec fringilla et elit eu pretium. Mauris accumsan vestibulum tortor, blandit pretium mi.</p>
                    <p>Phasellus feugiat orci id nisl ultricies commodo. Phasellus ultrices magna eu dolor dignissim, sed egestas augue ornare.</p>
                </div>
                <div className="modal__wine-info">
                    <p className="modal__country">France</p>
                    <div className="modal__wine-glass-container">
                        <i 
                            className="fas fa-wine-glass-alt modal__wine-glass" 
                            style={{color:"red"}} 
                        ></i>
                    </div>
                    <p className="modal__abv">12.5%</p>
                </div>
                <div className="modal__buttons">
                    <button>Close</button>
                    <button>Add to basket</button>
                </div>
            </div>
        </section>
    )
}

export default CardGrid;