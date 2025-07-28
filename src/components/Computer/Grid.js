
const Grid = ({ children }) => {
    return <div className="h-full w-full p-4 grid grid-cols-6 lg:grid-cols-8 grid-rows-5 gap-2 text-white">
        {children}
    </div>
}

export default Grid