import React from 'react'
import { NavLink } from 'react-router-dom'
export const NavBar = () => {
  
  const toggleMenu=document.querySelector('.navBarToggle')
  const toggleContainer=document.querySelector('.navBarToggleContainer')

  const toggleNavBar=(e)=>{
    e.preventDefault()
      toggleMenu.classList.toggle('navBarToggleSlide')
      toggleContainer.classList.toggle('navBarToggleContainerOff')

  }
    const togggleSlider =(e)=>{  
      toggleMenu.classList.toggle('navBarToggleSlide')
      toggleContainer.classList.toggle('navBarToggleContainerOff')
     
    }
  return (
     
  <div ClassName="navBarContainer">
  <nav className="navbar">
    <h2 className="navbarTitle">Consumidorxs </h2>
    <i className="fa-solid fa-bars" onClick={toggleNavBar}></i>
  </nav>

  <nav className="navBarToggle">
    <div className="navBarToggleContainer  ">  
      <i className="fa-solid fa-x fa-x" onClick={togggleSlider}></i>
      <ul className="navbarList">
      <NavLink to={"/"}>   <li className="listItem" > Inicio</li></NavLink>
        <NavLink to={"/"} ><li className="listItem">  Contacto  </li></NavLink>
        <NavLink to={"/"}> <li className="listItem">  Preguntas Frecuentes  </li></NavLink>
      <NavLink to={"/"}>  <li className="listItem">  Precios  </li></NavLink>
      </ul>
      <button className="loginButton">Log in</button>
    </div>
  </nav>

</div>

  )
  }
  
