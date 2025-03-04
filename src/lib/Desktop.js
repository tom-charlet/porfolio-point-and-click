
const Desktop = () => {
    return [
        {
            type: "shortcut",
            position: { x: 1, y: 1 },
            content: "documents/projets-personnelles"
        },
        {
            type: "shortcut",
            position: { x: 1, y: 2 },
            content: "documents/projets-professionnels"
        },
        {
            type: "shortcut",
            position: { x: 3, y: 3 },
            content: "documents/projets-scolaires"
        },
        {
            title: "Présentation",
            type: "note",
            position: { x: 3, y: 4 }
        },
        {
            title: "Compétences",
            type: "note",
            position: { x: 2, y: 1 }
        },
        {
            title: "CV",
            type: "image",
            position: { x: 1, y: 4 }
        }
    ]
}

export default Desktop