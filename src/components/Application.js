'use client'

import { useRef, useEffect } from "react";
import { useState } from "react";
import dynamic from "next/dynamic"

const Icon = dynamic(() => import('./Icon'));
const Modal = dynamic(() => import('./Modal'));

const Application = ({ title, type, position, content }) => {
    const ref = useRef(null)
    const [modalState, setModalState] = useState(false)

    useEffect(() => {
        if (ref?.current && position?.x && position?.y) {
            ref.current.style.gridColumnStart = position.x
            ref.current.style.gridRowStart = position.y
        }
    }, [])

    const handleClick = () => {
        setModalState(true)
    }

    return <>
        <button onClick={handleClick} ref={ref} className={`cursor-pointer h-full p-1 grid grid-rows-[1fr_auto] gap-1 place-items-center text-center rounded-[0.2em] hover:bg-neutral-800`}>
            <Icon name={type} fill="white" className="size-full" />
            {title}
        </button>
        <Modal title={title} type={type} content={content} state={modalState} setState={setModalState} />
    </>
}

export default Application