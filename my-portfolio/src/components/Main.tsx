import './Main.module.css'
import { Projects } from './Projects.tsx'
import { Contacts } from './Contacts.tsx'
import { About } from './About.tsx'
import { Skills } from './skills.tsx'
import { OptionalProps } from '../../ts.config.tsx'

export function Main({description}: OptionalProps) {
    return(
        <section>
            <div id="sobre">
                <About description={description}/>
            </div>

            <div id="habilidades">
                <Skills />
            </div>

            <div id="projetos">
                <Projects />
            </div>

            <div id="rede">
                <Contacts />
            </div>
        </section>
    )
}
