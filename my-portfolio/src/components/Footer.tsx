import  './Footer.module.css'

import {types} from '../../ts.config.tsx'

export function Footer({author, occupation}: types) {
    return (
        <>
            <h1>{author}</h1>
            <p>{occupation}</p>
        </>
    )
}