import './Main.module.css'
import { Projects } from './Projects.tsx'
import { Contacts } from './Contacts.tsx'
import { About } from './About.tsx'
import { Skills } from './skills.tsx'

export function Main() {
    return(
        <>
            <div id="sobre">
                <About />
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
        </>
    )
}