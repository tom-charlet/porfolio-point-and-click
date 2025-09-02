
export default function Container({ children, innerRef }) {
    return <div className="w-full h-full px-8 py-12">
        <div className="h-full w-full flex items-center justify-center">
            <div className="h-full aspect-video max-w-full flex items-center">
                <div className="w-full aspect-video bg-grey-900 rounded-xl border border-grey-500 overflow-hidden text-[1rem]">
                    <div ref={innerRef} className="h-full w-full flex flex-col relative">{children}</div>
                </div>
            </div>
        </div>
    </div>
}