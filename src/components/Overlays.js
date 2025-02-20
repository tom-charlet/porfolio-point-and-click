'use client'

import useOverlay from "../context/Overlay"

const Overlays = () => {
    const { modals } = useOverlay()

    console.log(modals)

    return <div className="bg-white/20 absolute inset-0">

    </div>
}

export default Overlays