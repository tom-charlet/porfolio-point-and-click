'use client'

import dynamic from "next/dynamic"

const NavBar = dynamic(() => import('./NavBar'));
const Application = dynamic(() => import('./Application'));
const Grid = dynamic(() => import('./Grid'));

const FolderContent = ({ content, path, history }) => {

    return <>
        <NavBar />
        <div className="flex h-full w-full items-center justify-center text-white text-4xl font-semibold">
            <Grid>
                {content?.length > 0 && content?.map((item, index) => <Application key={index} {...item} containerPath={path} history={history} style="folder" />)}
            </Grid>
        </div>
    </>
}

export default FolderContent