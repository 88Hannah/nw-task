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

    const currentWine = (id) => {
        setModalWine(id);
    };


    return (
        <Context.Provider value={{
            allWines, 
            isModalOpen, 
            toggleModal, 
            currentWine, 
            modalWine
        }}>
            {children}
        </Context.Provider>
    );
};

export {ContextProvider, Context}
