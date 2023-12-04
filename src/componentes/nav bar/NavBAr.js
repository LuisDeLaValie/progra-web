import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css';

function NavBar() {
  return (
    <nav>
      <NavLink className={({isActive})=>(isActive?'active':'')} to='/'>Inicio</NavLink>
      <NavLink className={({isActive})=>(isActive?'active':'')} to='/temas'>Temas</NavLink>
      <NavLink className={({isActive})=>(isActive?'active':'')} to='/autores'>Autores</NavLink>
      <NavLink  to='/agregartema'>Agregar Tema</NavLink>
      <NavLink  to='/libros'>Libros</NavLink>
      <NavLink  to='/agregarlibro'>Agregar Libros</NavLink>
    </nav>
  )
}

export default NavBar
