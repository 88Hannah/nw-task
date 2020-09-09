import React, {useState, useEffect} from 'react';
import * as wineData from './wines.json';

const Context = React.createContext();

function ContextProvider({children}) {

    const [allWines, setAllWines] = useState([]);

    useEffect(() => {
        setAllWines(wineData.wines)
    }, [])


    return (
        <Context.Provider value={{allWines}}>
            {children}
        </Context.Provider>
    );
};

export {ContextProvider, Context}
