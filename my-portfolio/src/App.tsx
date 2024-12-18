import { Footer } from './components/Footer.tsx'
import { Header } from './components/Header.tsx'
import { Main } from './components/Main.tsx'
import { Nav } from './components/Nav.tsx'
import { bio,  } from '../ts.config.tsx'
import './global.css'

export function App() {
 
  return (
    <div className="container">
      <header>
          <Header author={bio[0].author}  occupation={bio[0].occupation} />
        <nav>
            <Nav />
        </nav>
      </header>

      <section>
          <Main description={bio[0].description}/>
      </section>

      <footer>
          <Footer author={bio[0].author} description={bio[0].description}  occupation={bio[0].occupation} />
      </footer>
    </div>
  )
}
