'use client'

import { useMemory } from '@/context/Memory'
import { motion, useDragControls } from 'framer-motion'
import { useRef, useEffect } from "react"
import dynamic from "next/dynamic"

const TopBar = dynamic(() => import('./TopBar'));
const FolderContent = dynamic(() => import('./FolderContent'));

const Overlay = ({ containerRef, title, id, type, index, open, content }) => {
    const { setActiveOverlay } = useMemory()
    const dragControls = useDragControls()
    const ref = useRef(null)

    useEffect(() => {
        if (ref.current) ref.current.style.zIndex = index
    }, [index])

    if (!open) return null

    return <motion.div
        ref={ref}
        drag
        dragConstraints={containerRef}
        dragElastic={0}
        dragMomentum={false}
        onMouseDown={() => setActiveOverlay(id)}
        dragListener={false}
        dragControls={dragControls}
        className="aspect-[16/12] h-[60%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col shadow-2xl rounded-lg overflow-hidden absolute border-2 bg-grey-800 border-grey-500"
    >
        <TopBar dragControls={dragControls} id={id} icon={type} title={title} />
        <Content type={type} content={content} />
    </motion.div>
}

export default Overlay

const Content = ({ type, content }) => {

    switch (type) {
        case "folder":
            return <FolderContent content={content} />
        default: return null
    }
}