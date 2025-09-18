'use client'

import dynamic from "next/dynamic"
import { useEffect, useState } from 'react';

const NavBar = dynamic(() => import('./NavBar'));
const Application = dynamic(() => import('./Application'));
const Grid = dynamic(() => import('./Grid'));

const FolderContent = ({ content, path, identifier, history, historyCursor }) => {
    // const [localHistory, setLocalHistory] = useState()
    // const [before, setBefore] = useState(null)
    // const [after, setAfter] = useState(null)

    // useEffect(() => {
    //     const initial = { before: [], after: [], find: false }

    //     setLocalHistory(history.reduce((a, b) => {
    //         let before = a.before
    //         let after = a.after
    //         let find = a.find

    //         if (find) after.push(b)
    //         else if (b.identifier == identifier) find = true
    //         else before.push(b)

    //         return { before: before, after: after, find: find }
    //     }, initial))

    // }, [history])

    // console.log(localHistory)

    // useEffect(() => {
    //     if (localHistory?.before?.length > 0) setBefore(localHistory.before[localHistory.before.length - 1])
    //     if (localHistory?.after?.length > 0) setAfter(localHistory.after[localHistory.after.length - 1])
    // }, [localHistory])

    return <>
        {/* <NavBar before={before} after={previousHistory} identifier={identifier} history={history} previousHistory={previousHistory} /> */}
        <NavBar identifier={identifier} history={history} historyCursor={historyCursor} />
        <div className="flex h-full w-full items-center justify-center text-white text-4xl font-semibold">
            <Grid>
                {content?.length > 0 && content?.map((item, index) => <Application key={index} {...item} containerPath={path} history={history} historyCursor={historyCursor} style="folder" />)}
            </Grid>
        </div>
    </>
}

export default FolderContent