'use client'

import { useRef, useEffect } from "react";
import { useState } from "react";
import dynamic from "next/dynamic"
import { useGlobal } from "@/context/Global";
import { useMemory } from "@/context/Memory";
import placeApp from "../../utils/placeApp";
import { randomKey } from "@/utils/randomKey";

const Icon = dynamic(() => import('../Icon'));

const Application = ({ title, slug, type, position, content, containerPath, style, history }) => {
    const ref = useRef(null)
    const { explorer } = useGlobal()
    const { openOverlay, updateOverlay } = useMemory()
    const [soft, setSoft] = useState({})

    placeApp(ref, position)

    const findContent = ({ path, content, pathLocation }) => {
        if (!path.length) return null
        const [current, ...rest] = path
        const item = content.find(e => e.slug === current)
        const fullPath = [...(pathLocation ?? []), { title: item.title, slug: item.slug, type: item.type }]
        if (!item) return null
        if (rest.length === 0) return { ...item, path: fullPath }
        return findContent({ content: item.content, path: rest, pathLocation: fullPath })
    }

    useEffect(() => {
        let target = null

        if (type == "shortcut") target = { ...(findContent({ path: content?.split('/'), content: explorer }) ?? null) }
        else target = {
            title: title, type: type, content: content, slug: slug,
            path: type == "folder" ? [...containerPath, { title: title, slug: slug, type: type }] : containerPath
        }

        setSoft({
            ...target,
            id: randomKey(),
            container: target.path?.reduce((a, b) => a ? (b.type != "folder" ? a : (`${a}/${b.slug}`)) : b.slug, null),
        })

    }, [type, title, explorer, content])

    const handleClick = () => {
        const identifier = randomKey()
        const fullSoft = { ...soft, identifier: identifier, history: [...history ?? [], { ...soft, identifier: identifier }] }

        if (fullSoft?.type == "folder" && fullSoft.history?.length > 1) {
            const previousIdentifier = fullSoft.history[fullSoft.history.length - 2]?.identifier

            if (previousIdentifier) updateOverlay(previousIdentifier, fullSoft)
            else openOverlay(fullSoft)
        }
        else openOverlay(fullSoft)
    }

    if (!soft) return

    return <button ref={ref} onClick={handleClick} className={`cursor-pointer rounded gap-2 p-1 text-center grid grid-rows-[1fr_auto] ${style == "folder" ? "hover:bg-grey-700" : "hover:bg-grey-800"}`}>
        <Icon name={soft?.type} fill="white" className="w-full shrink-0 h-full" />
        <span className="text-[1rem] h-[3rem] text-ellipsis overflow-hidden line-clamp-2">{soft?.title}</span>
    </button>
}

export default Application

