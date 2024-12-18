import { OptionalProps } from '../../ts.config'
import style from './About.module.css'

export function About({description}: OptionalProps) {
    return(
        <>
            <section>
                <h1 className={style.sobre_mim}>Sobre mim</h1>
                <p className={style.description}>
                    {description}
                </p>
            </section>
        </>
    )
}