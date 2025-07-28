'use client'

import { useRef, useEffect } from "react";
import { useState } from "react";
import dynamic from "next/dynamic"
import { useGlobal } from "@/context/Global";
import { useMemory } from "@/context/Memory";
import placeApp from "../utils/placeApp";

const Icon = dynamic(() => import('./Icon'));

const Application = ({ title, type, position, content }) => {
    const ref = useRef(null)
    const { explorer } = useGlobal()
    const { openOverlay } = useMemory()
    const [soft, setSoft] = useState({})

    placeApp(ref, position)

    const findContent = (explorer, path) => {
        if (!path.length) return null
        const [current, ...rest] = path
        const item = explorer.find(e => e.slug === current)
        if (!item) return null
        if (rest.length === 0) return item
        return findContent(item.content, rest)
    }

    useEffect(() => {
        if (type == "shortcut") {
            let path = content?.split('/')
            let target = findContent(explorer, path)
            if (target) setSoft({ ...target, id: "shortcut-" + content.replaceAll('/', '-') })
        }
        else setSoft({ title: title, type: type, path: `${type}-${content}`.replaceAll('/', '-'), content: content })
    }, [type, title, explorer, content])

    const handleClick = () => {
        openOverlay(soft)
    }

    if (!soft) return

    return <button ref={ref} onClick={handleClick} className="cursor-pointer hover:bg-grey-800 rounded gap-1 p-1 text-center grid grid-rows-[1fr_auto]">
        <Icon name={soft?.type} fill="white" className="w-full shrink-0 h-full" />
        <span className="text-[1rem] h-[3rem] text-ellipsis overflow-hidden line-clamp-2">
            {soft?.title}
        </span>
    </button>
}

export default Application

