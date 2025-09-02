'use client'

import dynamic from "next/dynamic"

const ButtonIcon = dynamic(() => import('../ButtonIcon'));

const SearchBar = () => {
    return <div className="bg-grey-800 pl-3 pr-2 min-h-8 rounded-md w-full text-white text-[.75rem] leading-none flex items-center">
        <div className="w-full">

        </div>
        <ButtonIcon icon="search" size="md" />
    </div>
}

export default SearchBar