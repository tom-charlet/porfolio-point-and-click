const Heading = ({ children, className, level, tag, ...props }) => {

    let Balise = 'h' + level
    let style = 'leading-[120%] font-semibold '

    if (tag) { Balise = tag }

    switch (level) {
        case '1':
            style += 'text-[32px]'
            break
        case '2':
            style += 'text-[24px]'
            break
        case '3':
            style += 'text-[20px]'
            break
        case '4':
            style += 'text-[18px]'
            break
        case '5':
            style += 'text-[16px]'
            break
        case '6':
            style += 'text-[14px]'
            break
        default: false
    }

    return <Balise {...props} className={`${style} ${className ?? ''}`}>{children}</Balise>
}

export default Heading;
