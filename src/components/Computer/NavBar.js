'use client'

import dynamic from "next/dynamic"

const ButtonIcon = dynamic(() => import('../ButtonIcon'));
const PathBar = dynamic(() => import('./PathBar'));
const SearchBar = dynamic(() => import('./SearchBar'));

const NavBar = () => {
    return <div className='bg-grey-700 px-4 flex items-center gap-2 min-h-12'>
        <div className="flex items-center gap-4 mr-2">
            <ButtonIcon icon="arrow-left" />
            <ButtonIcon icon="arrow-right" />
            <ButtonIcon icon="home" />
        </div>
        <PathBar />
        <SearchBar />
    </div>
}

export default NavBar