import React, {useState, useEffect} from 'react';
import * as wineData from './wines.json';

const Context = React.createContext();

function ContextProvider({children}) {

    const [allWines, setAllWines] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalWine, setModalWine] = useState("");

    useEffect(() => {
        setAllWines(wineData.wines);
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
    
        if(type === "red") {
            wineColour = "#8d001f";
            tooltipText = "Red wine";
        } else if (type === "white") {
            wineColour = "#e4ce6c";
            tooltipText = "White wine";
        } else if (type === "rose") {
            wineColour = "#ffd1d8";
            tooltipText = "Rosé wine";
        } else if (type === "sparkling") {
            wineColour = "#b3955f";
            tooltipText = "Sparkling wine";
        } else {
            wineColour = "grey";
            tooltipText = "Wine";
        }

        return {wineColour, tooltipText}
    };


    return (
        <Context.Provider value={{
            allWines, 
            isModalOpen, 
            toggleModal, 
            currentWine, 
            modalWine,
            currentType
        }}>
            {children}
        </Context.Provider>
    );
};

export {ContextProvider, Context}
