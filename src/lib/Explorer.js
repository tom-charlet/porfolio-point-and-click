
const Explorer = () => {
    return [
        {
            title: "Documents",
            slug: "documents",
            type: "folder",
            content: [
                {
                    title: "Projets",
                    slug: "projets",
                    type: "folder",
                    content: [
                        {
                            title: "CV video",
                            slug: "cv-video",
                            type: "video",
                            content: "videos/cv-video.mp4",
                        },
                        {
                            title: "Portfolio",
                            slug: "portfolio",
                            type: "site",
                            content: "sites/portfolio.html",
                        }
                    ]
                },
                {
                    title: "Présentation",
                    slug: "presentation",
                    type: "note",
                    content: "notes/presentation.md",
                },
                {
                    title: "CV",
                    slug: "cv",
                    type: "image",
                    content: "images/file.svg",
                },
                {
                    title: "Photo de profil",
                    slug: "photo-de-profil",
                    type: "image",
                    content: "images/file.svg",
                }
            ]
        }
    ]
}

export default Explorer