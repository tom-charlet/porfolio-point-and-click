'use client'

import { useRef, useEffect } from "react";
import { useState } from "react";
import dynamic from "next/dynamic"
import { useGlobal } from "@/context/Global";
import { useMemory } from "@/context/Memory";
import placeApp from "../../utils/placeApp";
import { randomKey } from "@/utils/randomKey";

const Icon = dynamic(() => import('../Icon'));

const Application = ({ title, slug, type, position, content, containerPath, style }) => {
    const ref = useRef(null)
    const { explorer } = useGlobal()
    const { overlays, openOverlay, updateOverlay } = useMemory()
    const [soft, setSoft] = useState({})

    placeApp(ref, position)

    const findContent = ({ path, content, history }) => {
        if (!path.length) return null
        const [current, ...rest] = path
        const item = content.find(e => e.slug === current)
        const fullHistory = [...(history ?? []), { title: item.title, slug: item.slug, type: item.type }]
        if (!item) return null
        if (rest.length === 0) return { ...item, path: fullHistory }
        return findContent({ content: item.content, path: rest, history: fullHistory })
    }

    useEffect(() => {
        let target = null

        if (type == "shortcut") {
            let find = findContent({ path: content?.split('/'), content: explorer })
            if (find) target = { ...find }
        }
        else target = {
            title: title, type: type, content: content, slug: slug,
            path: type == "folder" ? [...containerPath, { title: title, slug: slug, type: type }] : containerPath
        }

        let container = target.path?.reduce((a, b) => a ? (b.type != "folder" ? a : (`${a}/${b.slug}`)) : b.slug, null)

        setSoft({
            ...target,
            container: container,
            id: randomKey()
            // id: `${container}${target?.type == "folder" ? "" : `/${target.slug}`}`
        })

    }, [type, title, explorer, content])

    const handleClick = () => {

        // faire historique de navigation dans la modal

        if (soft.type == "folder") {
            // if (!overlays?.find(item => item.id == soft.id)) {
            let previousContainer = soft.path.slice(0, soft.path.length - 1)?.reduce((a, b) => a ? `${a}/${b.slug}` : b.slug, null)
            let previousOverlay = overlays?.find(item => item.container == previousContainer) ?? null

            if (previousOverlay) updateOverlay(previousOverlay.identifier, soft)
            else openOverlay(soft)

            // let lastContainer = overlays?.find(item => item.id == lastContainerId)

            // if (lastOverlay) updateOverlay(lastOverlay.id, soft)
            // }
        }
        else openOverlay(soft)
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

