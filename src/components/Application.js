'use client'

import { useRef, useEffect } from "react";
import { useState } from "react";
import dynamic from "next/dynamic"
import { useOverlay } from "../context/Overlay";
import { useGlobal } from "@/context/Global";

const Icon = dynamic(() => import('./Icon'));
const Modal = dynamic(() => import('./Modal'));

const Application = ({ title, type, position, content }) => {
    const ref = useRef(null)
    const { explorer } = useGlobal()
    const [soft, setSoft] = useState({})

    const findContent = (explorer, path) => {
        if (!path.length) return null
        const [current, ...rest] = path
        const item = explorer.find(e => e.slug === current)
        if (!item) return null
        if (rest.length === 0) return item
        return findContent(item.content, rest)
    }

    useEffect(() => {
        if (ref?.current && position?.x && position?.y) {
            ref.current.style.gridColumnStart = position.x
            ref.current.style.gridRowStart = position.y
        }
    }, [position])

    useEffect(() => {
        if (type == "shortcut") {
            let path = content?.split('/')
            let target = findContent(explorer, path)
            if (target) setSoft({ ...target, icon: target.type })
        }
        else setSoft({ title: title, icon: type, content: content })
    }, [type, title, explorer, content])

    const handleClick = () => {

    }

    if (soft)
        return <>
            <button onClick={handleClick} ref={ref} className={`cursor-pointer h-full p-1 grid grid-rows-[1fr_auto] gap-1 place-items-center text-center rounded-[0.2em] hover:bg-neutral-800`}>
                <Icon name={soft?.icon} fill="white" className="size-full" />
                {soft?.title}
            </button>
        </>
    else return false
}

export default Application

