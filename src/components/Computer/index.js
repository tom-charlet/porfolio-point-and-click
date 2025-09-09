'use client'

import { useGlobal } from "@/context/Global"
import { useMemory } from "@/context/Memory";
import dynamic from "next/dynamic"
import { useRef } from "react";

const Container = dynamic(() => import('./Container'));
const Grid = dynamic(() => import('./Grid'));
const Application = dynamic(() => import('./Application'));
const Overlay = dynamic(() => import('./Overlay'));

const Computer = () => {
    const { desktop } = useGlobal()
    const { overlays } = useMemory()
    const containerRef = useRef()

    return <Container innerRef={containerRef}>
        <Grid>
            {overlays?.length > 0 && <ul className="absolute top-4 right-4 text-white px-6 py-4 bg-grey-700 rounded-lg flex flex-col gap-2">
                {overlays?.map((item, index) => <li key={index}>{item.index} {item.title} ({item.open ? "open" : "reduce"})</li>)}
            </ul>}
            {desktop?.map((item, index) => <Application key={index} {...item} />)}
        </Grid>
        {overlays?.map((item, index) => <Overlay key={`${item.identifier}-${index}`} containerRef={containerRef} {...item} />)}
    </Container>
}

export default Computer