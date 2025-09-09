'use client'

import { createContext, useContext, useState } from 'react';

const MemoryContext = createContext();

export const MemoryContextProvider = ({ children }) => {
    const [overlays, setOverlays] = useState([])

    const openOverlay = (e) => {
        const overlay = overlays?.find(item => item.id == e.id)

        if (overlay && !overlay.open && overlay.id) setOverlays([...overlays?.filter(item => item.id !== overlay.id), { ...overlay, index: overlays?.length, open: true }])
        else setOverlays([...overlays, { ...e, index: overlays?.length + 1, open: true }])
    }

    const removeOverlay = (identifier) => setOverlays([...overlays.filter(item => item.identifier != identifier)])

    const reduceOverlay = (identifier) => setOverlays(overlays?.reduce((a, b) => [...a, { ...b, open: (b.identifier == identifier) ? false : (b.open ?? false) }], []))

    const updateOverlay = (identifier, content) => setOverlays(overlays?.reduce((a, b) => [...a, (b.identifier == identifier) ? { ...b, ...content } : b], []))

    const setActiveOverlay = (identifier) => {
        const topOverlay = overlays?.reduce((a, b) => a?.index > b.index ? a : b, (overlays?.[0] ?? []))

        if (topOverlay?.identifier != identifier) setOverlays(overlays?.reduce((a, b) => [...a, { ...b, index: (b.identifier == identifier) ? (overlays?.length) : ((b.index > 1) ? (b.index - 1) : b.index) }], []))
    }

    return <MemoryContext.Provider value={{
        overlays,
        openOverlay,
        reduceOverlay,
        removeOverlay,
        setActiveOverlay,
        updateOverlay
    }}>
        {children}
    </MemoryContext.Provider>
}

export const useMemory = () => useContext(MemoryContext);