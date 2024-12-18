import styles from './Header.module.css'
import { OptionalProps } from '../../ts.config'


export function Header({author, occupation}: OptionalProps) {
    return (
        <>
            <h1 className={styles.author}>{author}</h1>
            <p className={styles.occupation}>{occupation}</p>
        </>
    )
}
