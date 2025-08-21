'use client'

import { createContext, useContext, useEffect, useState } from 'react';

const MemoryContext = createContext();

export const MemoryContextProvider = ({ children }) => {
    const [overlays, setOverlays] = useState([])

    const openOverlay = (e) => {
        if (e.id) {
            const overlay = overlays?.find(item => item.id == e.id)

            if (overlay) {
                const otherOverlays = overlays.filter(item => item.id != overlay.id)

                setOverlays([
                    ...otherOverlays?.map(item => { return { ...item, index: (item.index > 1) ? (item.index - 1) : item.index } }),
                    { ...e, index: overlays?.length + 1, open: true }
                ])
            }
            else setOverlays([...overlays, { ...e, index: overlays?.length + 1, open: true }])
        }
    }

    const removeOverlay = (id) => setOverlays([...overlays.filter(item => item.id != id)])

    const reduceOverlay = (id) => {
        setOverlays(overlays?.reduce((a, b) => [...a, { ...b, open: (b.id == id) ? false : (b.open ?? false) }], []))
    }

    const setActiveOverlay = (id) => {
        setOverlays(overlays?.map(item => {
            return { ...item, index: item.id == id ? (overlays?.length + 1) : (item.index > 1) ? (item.index - 1) : item.index }
        }))
    }

    return <MemoryContext.Provider value={{
        overlays,
        openOverlay,
        reduceOverlay,
        removeOverlay,
        setActiveOverlay
    }}>
        {children}
    </MemoryContext.Provider>
}

export const useMemory = () => useContext(MemoryContext);