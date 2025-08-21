'use client'

import { useGlobal } from "@/context/Global"
import { useMemory } from "@/context/Memory";
import dynamic from "next/dynamic"
import { useRef } from "react";

const Container = dynamic(() => import('./Container'));
const Grid = dynamic(() => import('./Grid'));
const Application = dynamic(() => import('../Application'));
const Overlay = dynamic(() => import('./Overlay'));

const Computer = () => {
    const { desktop } = useGlobal()
    const { overlays } = useMemory()
    const containerRef = useRef()

    console.log(overlays)
    
    return <Container innerRef={containerRef}>
        <Grid>
            {desktop?.map((item, index) => <Application key={index} {...item} />)}
        </Grid>
        {overlays?.map(item => <Overlay key={item.id} containerRef={containerRef} {...item} />)}
    </Container>
}

export default Computer