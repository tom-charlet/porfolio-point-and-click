'use client'

import { useEffect } from 'react';

export default function placeApp(ref, position) {

    useEffect(() => {
        if (ref?.current && position?.x && position?.y) {
            ref.current.style.gridColumnStart = position.x
            ref.current.style.gridRowStart = position.y
        }
    }, [position])
}