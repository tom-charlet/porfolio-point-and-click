'use client'

import { useGlobal } from "@/context/Global"
import dynamic from "next/dynamic"

const Application = dynamic(() => import('./Application'));

const Computer = () => {
    const { desktop } = useGlobal()

    return <div className="w-full h-full px-8 py-12">
        <div className="h-full w-full flex items-center justify-center">
            <div className="h-full aspect-video max-w-full flex items-center">
                <div className="w-full aspect-video bg-neutral-900 border border-white rounded-[0.8em] overflow-hidden text-[1vw]">
                    <div className="h-full w-full flex flex-col">
                        <div className="w-full h-[calc(100%-8%)] relative">
                            <div className="h-full w-full p-4 grid grid-cols-8 grid-rows-6 gap-2 text-white">
                                {desktop?.map((item, index) => <Application key={index} {...item} />)}
                            </div>
                        </div>
                        <div className="h-[8%] bg-neutral-800 shrink-0"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Computer