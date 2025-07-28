'use client'

import { useMemory } from '@/context/Memory'
import { motion, useDragControls } from 'framer-motion'
import { useRef, useEffect } from "react"

const Overlay = ({ title, id, index, containerRef }) => {
    const { setActiveOverlay, removeOverlay } = useMemory()
    const dragControls = useDragControls()
    const ref = useRef(null)

    useEffect(() => {
        if (ref.current) ref.current.style.zIndex = index
    }, [index])

    return <motion.div
        ref={ref}
        drag
        dragConstraints={containerRef}
        dragElastic={0}
        dragMomentum={false}
        onMouseDown={() => setActiveOverlay(id)}
        dragListener={false}
        dragControls={dragControls}
        className="aspect-[16/12] h-[60%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col shadow-2xl rounded-lg overflow-hidden backdrop-blur-2xl absolute border border-grey-500"
    >
        <div className="cursor-move bg-grey-700/80 text-white text-sm select-none flex justify-between items-center h-12" onPointerDown={(e) => dragControls.start(e)}>
            <span className='pl-4'>Document {title}</span>
            <button onClick={() => removeOverlay(id)} className='h-full aspect-square bg-grey-600/40 cursor-pointer text-2xl font-normal leading-[-50px]'>x</button>
        </div>
        <div className="flex h-full w-full items-center justify-center text-white text-4xl font-semibold bg-grey-800/60">
            {title}
        </div>
    </motion.div>
}

export default Overlay