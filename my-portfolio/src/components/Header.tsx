import './header.module.css'
import { typesProps } from '../../ts.config'


export function Header({author, occupation}: typesProps) {
    return (
        <>
            <h1>{author}</h1>
            <p>{occupation}</p>
        </>
    )
}
