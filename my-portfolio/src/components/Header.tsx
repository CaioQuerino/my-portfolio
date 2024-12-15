import './header.module.css'
import {types} from '../../ts.config.tsx'

export function Header({author, occupation}: types) {
    return (
        <>
            <h1>{author}</h1>
            <p>{occupation}</p>
        </>
    )
}
