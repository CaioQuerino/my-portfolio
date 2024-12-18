import './global.css'
import { Footer } from './components/Footer.tsx'
import { Header } from './components/Header.tsx'
import { Main } from './components/Main.tsx'
import { Nav } from './components/Nav.tsx'


export function App() {
 
  return (
    <div className="container">
      <header>
          <Header author="Caio Querino"  occupation="Dev. Back-End" />
        <nav>
            <Nav />
        </nav>
      </header>

      <section>
          <Main />
      </section>

      <footer>
          <Footer author="Caio Querino"  occupation="Dev. Back-End" />
      </footer>
    </div>
  )
}
