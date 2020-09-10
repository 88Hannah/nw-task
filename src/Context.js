import React, {useState, useEffect} from 'react';
import * as wineData from './wines.json';

const Context = React.createContext();

function ContextProvider({children}) {

    const [allWines, setAllWines] = useState([]);
    const [winesToDisplay, setWinesToDisplay] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalWine, setModalWine] = useState("");
    const [basket, setBasket] = useState([]);

    useEffect(() => {
        setAllWines(wineData.wines);
        setWinesToDisplay(wineData.wines);
    }, []);

    const toggleModal = () => {
        setIsModalOpen(prevState => !prevState);
    };

    const currentWine = id => {
        setModalWine(id);
    };

    const currentType = type => {
        var wineColour = "";
        var tooltipText = "";

        switch(type) {
            case "red":
                wineColour = "#8d001f";
                tooltipText = "Red wine";
                break;
            case "white":
                wineColour = "#e4ce6c";
                tooltipText = "White wine";
                break;
            case "rose":
                wineColour = "#ffd1d8";
                tooltipText = "Rosé wine";
                break;
            case "sparkling":
                wineColour = "#b3955f";
                tooltipText = "Sparkling wine";
                break;
            default:
                wineColour = "grey";
                tooltipText = "Wine";
            }

            return {wineColour, tooltipText}
        }


    const filterWines = (type, country, min, max) => {
        setWinesToDisplay(() => {
            const typeFiltered = type !== "default" ? allWines.filter(wine => wine.type === type) : allWines;
            const countryAndTypeFiltered = country !== "default" ? typeFiltered.filter(wine => (wine.country).toLowerCase() === country) : typeFiltered;
            const allFilters = countryAndTypeFiltered.filter(wine => {
                if(max) {
                   return wine.price >= min && wine.price <= max;
                } else {
                    return wine.price >= min;
                }
            })
            return allFilters;
        })
    };

    const toggleBasket = id => {
        
        const wineIndex = allWines.findIndex(wine => wine.id === id);
        const inBasket = basket.some(wine => wine.id === id);

        if(!inBasket) {
            setBasket(prevBasket => [...prevBasket, allWines[wineIndex]]);
        } else if (inBasket) {
            setBasket(prevBasket => prevBasket.filter(wine => wine.id !== id))
        }
        
    };




    return (
        <Context.Provider value={{
            allWines, 
            isModalOpen, 
            toggleModal, 
            currentWine, 
            modalWine,
            currentType,
            filterWines,
            winesToDisplay,
            basket,
            toggleBasket
        }}>
            {children}
        </Context.Provider>
    );
};

export {ContextProvider, Context}
