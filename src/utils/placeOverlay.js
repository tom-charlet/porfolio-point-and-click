'use client'

import { useEffect } from 'react';

export default function placeOverlay(ref, x, y) {

    useEffect(() => {
        if (ref?.current && x && y) {
            ref.current.style.left = x + "px"
            ref.current.style.top = y + "px"
        }
    }, [x, y])
}