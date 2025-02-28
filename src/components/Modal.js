import React, {useContext, useState} from 'react';
import {Context} from '../Context';

function Modal() {

const {allWines, modalWine, toggleModal, isModalOpen, currentType, toggleBasket, basket} = useContext(Context);
const [modalTooltipVisibility, setModalTooltipVisibility] = useState("hidden");
    
const modalWineInfo = allWines.find(wine => wine.id === modalWine);

var amount, modalText, wineColour, tooltipText;
if (modalWineInfo) {
    amount = modalWineInfo.price.toLocaleString('en', {style: 'currency', currency: 'GBP'});
    // Use a mapping to add paragraph tags to each of the paragraphs in the description array
    modalText = modalWineInfo.description.map((paragraph, id) => (
        <p key={id}>{paragraph}</p>
    ));
    var {wineColour, tooltipText} = currentType(modalWineInfo.type);
}

const modalDisplay = isModalOpen ? "block" : "none";

const handleMouseEnter = () => {
    setModalTooltipVisibility("visible");
};

const handleMouseLeave = () => {
    setModalTooltipVisibility("hidden");
};

const handleClick = event => {
    if(event.target.classList.contains("modal-container")) {
        toggleModal();
    };
};


var buttonText = "";
var basketClass = "";
if(modalWineInfo) {
    const inBasket = basket.some(basketWine => basketWine.id === modalWineInfo.id);
    if (inBasket) {
        buttonText = "Remove";
        basketClass = "btn-secondary";
    } else if (!inBasket) {
        buttonText = "Add to basket";
        basketClass = "btn-primary";
    }
}


    return (
        
        modalWineInfo ? 
        <div className="modal-container" style={{display:modalDisplay}} onClick={handleClick}>
            <div className="modal">
                <h2 className="modal__wine-name">{modalWineInfo.name}</h2>
                <div className="modal__img">
                    <img src={modalWineInfo.image} alt={modalWineInfo.name} />
                </div>
                <p className="modal__price">{amount} per bottle</p>
                <div className="modal__description">
                    {modalText}
                </div>
                <div className="modal__wine-info">
                    <p className="modal__country">{modalWineInfo.country}</p>
                    <div className="modal__wine-glass-container">
                        <i 
                            className="fas fa-wine-glass-alt wine-glass modal__wine-glass" 
                            style={{color:wineColour}}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        ></i>
                        <span 
                            className="wine-glass-tooltip" 
                            style={{visibility:modalTooltipVisibility}}
                        >{tooltipText}</span>
                    </div>
                    <p className="modal__abv">{modalWineInfo.abv}% ABV</p>
                </div>
                <div className="modal__buttons">
                    <button className="btn-secondary" onClick={toggleModal}>Close</button>
                    <button className={basketClass} onClick={() => toggleBasket(modalWineInfo.id)}>{buttonText}</button>
                </div>
            </div>
        </div>
        : null

    );
};

export default Modal;