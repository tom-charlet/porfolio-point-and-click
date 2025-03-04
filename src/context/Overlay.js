'use client'

import { createContext, useContext, useEffect, useState } from 'react';
import Explorer from "../lib/Explorer"
import dynamic from 'next/dynamic';

// const Overlay = dynamic(() => import('../components/Overlay'));

const OverlayContext = createContext();

export const OverlayContextProvider = ({ children }) => {
    const [files, setFiles] = useState([])
    const explorer = Explorer()

    const addFile = (e) => {
        setFiles([...files, e])
    }

    const removeFile = (e) => {
        setFiles(files.filter(file => e.slug != file.slug))
    }

    return <OverlayContext.Provider value={{ explorer, files, addFile, removeFile }}>
        {children}
    </OverlayContext.Provider>
}

export const useOverlay = () => useContext(OverlayContext);