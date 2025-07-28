'use client'

import { createContext, useContext, useEffect, useState } from 'react';

const MemoryContext = createContext();

export const MemoryContextProvider = ({ children }) => {
    const [overlays, setOverlays] = useState([])

    const addOverlay = (e) => setOverlays([...overlays, e])
    const removeOverlay = (id) => setOverlays([...overlays.filter(item => item.id != id)])

    const openOverlay = (e) => {
        if (e.id) {
            const overlay = overlays?.find(item => item.id == e.id)

            if (overlay) {
                const otherOverlays = overlays.filter(item => item.id != overlay.id)

                setOverlays([
                    ...otherOverlays?.map(item => { return { ...item, index: (item.index > 1) ? (item.index - 1) : item.index } }),
                    { ...e, index: overlays?.length + 1 }
                ])
            }
            else setOverlays([...overlays, { ...e, index: overlays?.length + 1 }])
        }
    }

    // useEffect(() => {
    //     if (size > overlays?.length && overlays?.length > 0) {
    //         setSize(size + 1)
    //         setOverlays(overlays?.map(item => {
    //             return { ...item, index: item.index ?? overlays?.length ?? 0 }
    //         }))
    //     }
    // }, [overlays])

    const setActiveOverlay = (id) => {
        setOverlays(overlays?.map(item => {
            return { ...item, index: item.id == id ? (overlays?.length + 1) : (item.index > 1) ? (item.index - 1) : item.index }
        }))
    }

    return <MemoryContext.Provider value={{
        overlays,
        addOverlay,
        openOverlay,
        removeOverlay,
        setActiveOverlay
    }}>
        {children}
    </MemoryContext.Provider>
}

export const useMemory = () => useContext(MemoryContext);