import React, {useContext} from 'react';
import {Context} from '../Context';

function Modal() {

const {allWines, modalWine, toggleModal, isModalOpen} = useContext(Context);

const modalWineInfo = allWines.find(wine => wine.id === modalWine);

var amount, modalText
if (modalWineInfo) {
    amount = modalWineInfo.price.toLocaleString('en', {style: 'currency', currency: 'GBP'});
    modalText = modalWineInfo.description.map(paragraph => (
        <p>{paragraph}</p>
    ));
}

console.log(isModalOpen)
const modalDisplay = isModalOpen ? "block" : "none";

    return (
        
        modalWineInfo ? 
        <div className="modal-container" style={{display:modalDisplay}}>
            <div className="modal">
                <h2 className="modal__wine-name">{modalWineInfo.name}</h2>
                <div className="modal__img">
                    <img src={modalWineInfo.image} alt={modalWineInfo.name} />
                </div>
                <p className="modal__price">{amount} a bottle</p>
                <div className="modal__description">
                    {modalText}
                </div>
                <div className="modal__wine-info">
                    <p className="modal__country">{modalWineInfo.country}</p>
                    <div className="modal__wine-glass-container">
                        <i 
                            className="fas fa-wine-glass-alt modal__wine-glass" 
                            style={{color:"red"}} 
                        ></i>
                    </div>
                    <p className="modal__abv">{modalWineInfo.abv}%</p>
                </div>
                <div className="modal__buttons">
                    <button onClick={toggleModal}>Close</button>
                    <button>Add to basket</button>
                </div>
            </div>
        </div>
        : null

    )
}

export default Modal;