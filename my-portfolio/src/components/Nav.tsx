import style from './Nav.module.css'

export function Nav() {
    return (
        <>
            <ul className={style.list}>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#habilidades">Habilidades</a></li>
                <li><a href="#projetos">Projetos</a></li>
                <li><a href="#curriculo">Currículo</a></li>
                <li><a href="#redes">Contato</a></li>
            </ul>
        </>
    )
}