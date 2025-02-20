'use client'

import { createContext, useEffect, useState } from "react";

export const OverlayContext = createContext();

const useOverlay = ({ children }) => {
    const [modals, setmodals] = useState([]);

    return <OverlayContext.Overlay value={{ modals, setmodals }}>
        {children}
    </OverlayContext.Overlay>
}

export default useOverlay