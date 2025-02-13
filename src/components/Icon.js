import React from 'react'

const Icon = ({ name, fill, ...props }) => {
    switch (name) {
        case 'note':
            return <svg {...props} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 25H32V22H16V25ZM16 31H32V28H16V31ZM16 37H26V34H16V37ZM11 44C10.2 44 9.5 43.7 8.9 43.1C8.3 42.5 8 41.8 8 41V7C8 6.2 8.3 5.5 8.9 4.9C9.5 4.3 10.2 4 11 4H29.05L40 14.95V41C40 41.8 39.7 42.5 39.1 43.1C38.5 43.7 37.8 44 37 44H11ZM27.55 16.3H37L27.55 7V16.3Z" fill={fill ?? "#1C1B1F"} />
            </svg>
        default: return false
    }
}

export default Icon