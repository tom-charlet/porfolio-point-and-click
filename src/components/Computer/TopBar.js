'use client'

import { useMemory } from '@/context/Memory'
import dynamic from "next/dynamic"

const Icon = dynamic(() => import('../Icon'));

const TopBar = ({ dragControls, icon, title, identifier }) => {
    const { reduceOverlay, removeOverlay } = useMemory()

    const handleDrag = (e) => dragControls.start(e)

    return <div className="cursor-move text-white text-sm select-none flex justify-between h-10 shrink-0" onPointerDown={handleDrag}>
        <div className='gap-2 flex items-center pl-4'>
            <Icon name={icon} fill="auto" className="fill-white size-5" />
            <span>{title}</span>
        </div>
        <div className='flex items-center'>
            <Button icon="reduce" onClick={() => reduceOverlay(identifier)} />
            <Button icon="square" />
            <Button icon="close" close onClick={() => removeOverlay(identifier)} />
        </div>
    </div>
}

export default TopBar

const Button = ({ icon, id, close, ...props }) => {

    return <button {...props} className={`px-4 h-full cursor-pointer flex items-center justify-center ${close ? "hover:bg-red-600" : "hover:bg-grey-700"}`}>
        <Icon name={icon} {...props} fill="auto" className="fill-white size-5" />
    </button>
}