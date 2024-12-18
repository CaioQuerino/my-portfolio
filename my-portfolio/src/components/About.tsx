import { typesProps } from '../../ts.config'
import './About.module.css'

export function About({description}:typesProps) {
    return(
        <>
            <section>
                <h1>Sobre mim</h1>
                <p>
                    {description}
                </p>
            </section>
        </>
    )
}