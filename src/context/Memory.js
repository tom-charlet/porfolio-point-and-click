'use client'

import { randomKey } from '@/utils/randomKey';

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
            else setOverlays([...overlays, { ...e, index: overlays?.length + 1, open: true, identifier: randomKey() }])
        }
    }

    const removeOverlay = (id) => setOverlays([...overlays.filter(item => item.id != id)])

    const reduceOverlay = (id) => {
        setOverlays(overlays?.reduce((a, b) => [...a, { ...b, open: (b.id == id) ? false : (b.open ?? false) }], []))
    }

    const updateOverlay = (id, content) => {

        const update = overlays?.reduce((a, b) => {
            if (b.id == id) a.push({ ...b, ...content })
            else a.push(b)
            return a
        }, [])

        setOverlays(update)
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
        setActiveOverlay,
        updateOverlay
    }}>
        {children}
    </MemoryContext.Provider>
}

export const useMemory = () => useContext(MemoryContext);