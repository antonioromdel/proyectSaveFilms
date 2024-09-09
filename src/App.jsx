import React, { useState } from 'react'
import './assets/Index.css'
import Listado from './components/Listado.jsx'
import Buscador from './components/Buscador.jsx'
import Crear from './components/Crear.jsx'

function App() {

  const [listado, setListado] = useState([])

  return (
    <>
      <div className="layaout">
        <header className="header">
            <div className="logo">
                <div className="play">

                </div>
            </div>
            <h1 className="header__title">Mis peliculas</h1>
        </header>
        <nav className="nav">
            <ul className="nav__ul">
                <li className="links"><a href="#">Inicio</a></li>
                <li className="links"><a href="#">Peliculas</a></li>
                <li className="links"><a href="#">Blog</a></li>
                <li className="links"><a href="#">Contacto</a></li>
            </ul>
        </nav>

        <section className="content">

            <Listado 
              listado={listado}
              setListado={setListado}
            />

        </section>

        <aside className="lateral">
            
            <Buscador 
             listado={listado}
             setListado={setListado}
             />

            <Crear setListado={setListado}/>
        </aside>

        <footer className="footer">
            &copy; Web películas
        </footer>
        </div>
    </>
  )
}

export default App
