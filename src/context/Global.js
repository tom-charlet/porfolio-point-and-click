'use client'

import { createContext, useContext } from 'react';
import Explorer from "../lib/Explorer";
import Desktop from '@/lib/Desktop';

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
    const explorer = Explorer()
    const desktop = Desktop()

    return <GlobalContext.Provider value={{ explorer, desktop }}>
        {children}
    </GlobalContext.Provider>
}

export const useGlobal = () => useContext(GlobalContext);