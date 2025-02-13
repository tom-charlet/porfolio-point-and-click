'use client'

import Data from "@/lib/Desktop"
import dynamic from "next/dynamic"

const Icon = dynamic(() => import('./Icon'));

const Computer = () => {
    const data = Data()

    console.log(data)

    return <div className="w-[80%] max-h-full aspect-video p-5 rounded-md border border-white bg-neutral-900 text-white grid grid-cols-6 grid-rows-6 text-[1vw]">
        {data?.map((item, index) => <Soft key={index} {...item} />)}
    </div>
}

export default Computer

const Soft = ({ title, type, position, content }) => {
    return <div className="gap-1 bg-neutral-800 h-full grid grid-rows-[1fr_auto] place-items-center text-center">
        <Icon name={type} fill="white" className="size-full" />
        {title}
    </div>
}