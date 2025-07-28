'use client'

import { useState } from "react"
import dynamic from "next/dynamic"

const Icon = dynamic(() => import('../Icon'));

const Modal = ({ type, state, ...props }) => {
    return <div className={`${state ? "" : "hidden"} absolute inset-0 p-[2%]`}>
        <div className="h-full w-full bg-grey-700 rounded-[0.6em] grid grid-rows-[auto_1fr] overflow-hidden">
            <TopBar type={type} state={state} {...props} />
            <div className="bg-grey-800 h-full w-full border-grey-300 border-t">

            </div>
        </div>
    </div>
}

export default Modal

const TopBar = ({ title, type, setState }) => {
    return <div className="h-full w-full flex justify-between items-center">
        <div className="flex items-center gap-[0.8em] px-[1em] py-[0.8em]">
            <Icon name={type} fill="auto" className="fill-white size-[1.8em]" />
            <h3 className="text-[1.2em] whitespace-nowrap font-medium">{title}</h3>
        </div>
        <div className="flex items-center h-full">
            <Button icon="reduce" />
            <Button icon="square" />
            <Button icon="close" onClick={() => setState(false)} />
        </div>
    </div>
}

const Button = ({ icon, ...props }) => {
    return <button {...props} className="group hover:bg-grey-600 px-[1em] h-full">
        <Icon name={icon} fill="auto" className="fill-grey-300 group-hover:fill-white size-[1.6em]" />
    </button>
}