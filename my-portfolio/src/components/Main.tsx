import './Habilidades.module.css'
import './Main.module.css'
import { Habilidades } from './Habilidades.tsx'

export function Main() {
    return(
        <>
            <div id="sobre">
                <h2>Sobre mim</h2>
                <p>Sou um Desenvolvedor Front-End em início de carreira, com uma base sólida em HTML5, CSS3, JavaScript e PHP. Tenho experiência na criação de interfaces de usuário responsivas e interativas, utilizando tecnologias modernas. Atualmente, meu foco está em TypeScript, React e JavaScript.
                Sou apaixonado por entregar soluções eficazes e estou sempre buscando aprimorar minhas habilidades e aplicar as melhores práticas no desenvolvimento web. Além disso, utilizo ferramentas como Figma para design de UI/UX e possuo conhecimento em controle de versão com Git e GitHub.
                Meu objetivo é evoluir para Desenvolvedor Full Cycle, sempre buscando aprender novas tecnologias e expandir meu conhecimento para criar soluções ainda mais completas.
                </p>
            </div>

            <div id="habilidades">
                <Habilidades />
            </div>

            <div id="projetos">

            </div>
        </>
    )
}