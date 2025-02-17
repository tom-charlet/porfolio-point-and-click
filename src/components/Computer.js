'use client'

import { useRef, useEffect } from "react";
import Data from "@/lib/Desktop"
import dynamic from "next/dynamic"

const Icon = dynamic(() => import('./Icon'));

const Computer = () => {
    const data = Data()

    return <div className="w-[80%] max-h-full aspect-video p-5 rounded-md border border-white bg-neutral-900 text-white grid grid-cols-8 grid-rows-6 text-[1vw] gap-2">
        {data?.map((item, index) => <Soft key={index} {...item} />)}
    </div>
}

export default Computer

const Soft = ({ title, type, position, content }) => {
    const ref = useRef(null)

    useEffect(() => {
        if (ref?.current && position?.x && position?.y) {
            ref.current.style.gridColumnStart = position.x
            ref.current.style.gridRowStart = position.y
        }
    }, [])

    return <button ref={ref} className={`cursor-pointer h-full p-1 grid grid-rows-[1fr_auto] gap-1 place-items-center text-center rounded hover:bg-neutral-800`}>
        <Icon name={type} fill="white" className="size-full" />
        {title}
    </button>
}