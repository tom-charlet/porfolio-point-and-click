
const Grid = ({ children }) => {
    return <div className="h-full w-full p-4 grid grid-cols-[repeat(auto-fill,_minmax(10%,_150px))] grid-rows-[repeat(auto-fill,_minmax(10%,_130px))] gap-2 text-white">
        {children}
    </div>
}

export default Grid