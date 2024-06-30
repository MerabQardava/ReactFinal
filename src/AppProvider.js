import React, {createContext, useState} from 'react';
import useLocalStorage from "./Custom Hooks/useLocalStorage";

export const AppContext = createContext();

function AppProvider({children}) {
    const [genres, setGenres] = useState(undefined);
    const [favorites,setFavorites]=useLocalStorage("favorites",{});

    // console.log(favorites,"mech")



    return (
        <AppContext.Provider value={{genres,setGenres,favorites,setFavorites}}>
            {children}
        </AppContext.Provider>
    );
}

export default AppProvider;