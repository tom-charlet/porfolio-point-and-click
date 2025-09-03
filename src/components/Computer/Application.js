'use client'

import { useRef, useEffect } from "react";
import { useState } from "react";
import dynamic from "next/dynamic"
import { useGlobal } from "@/context/Global";
import { useMemory } from "@/context/Memory";
import placeApp from "../../utils/placeApp";

const Icon = dynamic(() => import('../Icon'));

const Application = ({ title, type, position, content, style }) => {
    const ref = useRef(null)
    const { explorer } = useGlobal()
    const { overlays } = useMemory()
    const { openOverlay } = useMemory()
    const [soft, setSoft] = useState({})

    placeApp(ref, position)

    const findContent = ({ initial, explorer, path }) => {
        let currentPath = initial ?? path
        if (!currentPath.length) return null
        const [current, ...rest] = currentPath
        const item = explorer.find(e => e.slug === current)
        if (!item) return null
        if (rest.length === 0) return item
        return findContent({ explorer: item.content, path: rest })
    }

    useEffect(() => {
        if (type == "shortcut") {
            let path = content?.split('/')
            let target = findContent({ initial: path, explorer: explorer })
            if (target) setSoft({ ...target, id: "shortcut-" + content.replaceAll('/', '-') })
        }
        else if (type == "folder") {
            setSoft({ type: "folder", id: "folder-" + title, title: title, content: content })
        }
        else setSoft({ title: title, type: type, path: `${type}-${content}`.replaceAll('/', '-'), content: content })
    }, [type, title, explorer, content])

    const handleClick = () => {
        console.log(soft, overlays)
        openOverlay(soft)
    }

    if (!soft) return

    return <button ref={ref} onClick={handleClick} className={`cursor-pointer rounded gap-2 p-1 text-center grid grid-rows-[1fr_auto] ${style == "folder" ? "hover:bg-grey-700" : "hover:bg-grey-800"}`}>
        <Icon name={soft?.type} fill="white" className="w-full shrink-0 h-full" />
        <span className="text-[1rem] h-[3rem] text-ellipsis overflow-hidden line-clamp-2">
            {soft?.title}
        </span>
    </button>
}

export default Application

