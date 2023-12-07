import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css';

function NavBar() {
  return (
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Bliblioteca</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        {/* <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li> */}
        <li className="nav-item"><NavLink className={"nav-link"}  to='/'>Inicio</NavLink></li> 
        <li className="nav-item"><NavLink className={"nav-link"}  to='/autores'>Autores</NavLink></li> 
        <li className="nav-item"><NavLink className={"nav-link"}  to='/temas'>Temas</NavLink></li> 
        <li className="nav-item"><NavLink className={"nav-link"}  to='/agregartema'>Agregar Tema</NavLink></li> 
        <li className="nav-item"><NavLink className={"nav-link"}  to='/libros'>Libros</NavLink></li> 
        <li className="nav-item"><NavLink className={"nav-link"}  to='/agregarlibro'>Agregar Libros</NavLink></li> 
      </ul>
    </div>
  </div>
</nav>

  )
}

export default NavBar
