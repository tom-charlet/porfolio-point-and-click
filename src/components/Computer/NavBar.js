'use client'

import dynamic from "next/dynamic"
import { useMemory } from '@/context/Memory'

const ButtonIcon = dynamic(() => import('../ButtonIcon'));
const PathBar = dynamic(() => import('./PathBar'));
const SearchBar = dynamic(() => import('./SearchBar'));

const NavBar = ({ before, after, identifier, history }) => {
    const { updateOverlay } = useMemory()

    const handleUpdate = (e) => {
        updateOverlay(identifier, { ...e, history: history })
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
            <ButtonIcon onClick={() => handleUpdate(before)} icon="arrow-left" color={before ? "white" : "grey"} />
            <ButtonIcon onClick={() => handleUpdate(after)} icon="arrow-right" color={after ? "white" : "grey"} />
            <ButtonIcon icon="home" />
        </div>
        <PathBar />
        <SearchBar />
    </div>
}

export default NavBar