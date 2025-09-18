'use client'

import dynamic from "next/dynamic"
import { useMemory } from '@/context/Memory'

const ButtonIcon = dynamic(() => import('../ButtonIcon'));
const PathBar = dynamic(() => import('./PathBar'));
const SearchBar = dynamic(() => import('./SearchBar'));

const NavBar = ({ before, after, identifier, history, historyCursor, previousHistory }) => {
    const { updateOverlay } = useMemory()

    // console.log(previousHistory)

    // const handleBack = () => {
    //     updateOverlay(identifier, { ...before, history: history?.slice(0, history?.length - 1), previousHistory: [...(previousHistory ?? []), after] })
    // }

    // const handleNext = () => {
    //     updateOverlay(identifier, { ...after, history: history })
    // }

    const handleBack = () => {
        // console.log(history[history?.length - 1 + (historyCursor ?? -1)])
        const newItem = { ...history[historyCursor - 1] }

        console.log(newItem, history)

        // updateOverlay(identifier, { identifier: identifier, history: history, ...history[history?.length - 1 + (historyCursor ?? -1)], historyCursor: (historyCursor ?? -2) })
        updateOverlay(identifier, {
            ...newItem,
            // history: history?.slice(0, history?.length - 1),
            historyCursor: historyCursor - 1,
        })
    }

    const handleNext = () => {

    }

    /*
    Revoir historique
    Au lieu de stocker un historique complet chronologique
    il faut stocker au clique sur une appli un before
    et uniquement au clique sur le bouton retour : stocker un next
    si il y a before on applique le before
    si il y after on applique le after
    */

    return <div className='bg-grey-700 px-4 flex items-center gap-2 min-h-12'>
        <div className="flex items-center gap-4 mr-2">
            {/* <ButtonIcon disabled={!before} onClick={handleBack} icon="arrow-left" color={before ? "white" : "grey"} />
            <ButtonIcon disabled={!after} onClick={handleNext} icon="arrow-right" color={after ? "white" : "grey"} /> */}
            <ButtonIcon disabled={historyCursor <= 0} onClick={handleBack} icon="arrow-left" color={historyCursor > 0 ? "white" : "grey"} />
            <ButtonIcon onClick={handleNext} icon="arrow-right" color={true ? "white" : "grey"} />
            <ButtonIcon icon="home" />
        </div>
        <PathBar />
        <SearchBar />
    </div>
}

export default NavBar