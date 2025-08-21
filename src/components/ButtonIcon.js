import dynamic from "next/dynamic"
import { useRef } from "react";

const Icon = dynamic(() => import('./Icon'));

const ButtonIcon = ({ icon, href, size, tag, className, ...props }) => {
    const Balise = tag ?? "button";

    let sizeButton = ""
    let sizeIcon = ""

    switch (size) {
        case "md":
            sizeButton = "size-6"
            sizeIcon = "size-4"
            break;
        case "sm": default:
            sizeButton = "size-5"
            sizeIcon = "size-3"
            break;
    }

    let styleButton = `flex items-center justify-center ${sizeButton} ${className ?? ""}`;
    let styleIcon = `${sizeIcon}`;

    if (href) return <Link href={href} {...props} className={styleButton}>
        <Icon name={icon} fill="auto" className={styleIcon} />
    </Link>
    else return <Balise {...props} className={styleButton}>
        <Icon name={icon} fill="auto" className={styleIcon} />
    </Balise>

}

export default ButtonIcon