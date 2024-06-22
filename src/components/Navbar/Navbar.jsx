import React, {useState} from 'react'
import './Navbar.css'
import {TbGridDots} from 'react-icons/tb'
import {AiFillCloseCircle} from 'react-icons/ai'
// import cv from '../../../public/cv/FRONTEND DEVELOPER.pdf'

const Navbar = () => {
  // code to toggle on and off the navbar at small width.
  const [active, setActive] = useState('navBar')

  //this will bring in the navbar from the top
  const showNavbar = () =>{
      setActive('navBar activeNavbar')
  }

  //this function will remove the navbar.
  const removeNavbar = () =>{
      setActive('navBar')
  }

  //code statement to add a background color to the header.
  const [activeHeader, setActiveHeader] = useState('header')
  const addBg = ()=>{
    if(window.scrollY >= 10){
      setActiveHeader('header activeHeader')
    }else{
      setActiveHeader('header')
    }
  }
  window.addEventListener('scroll', addBg)

  return (
     <header className={activeHeader}>
        <div className="logoDiv">
          <h1 className="logo"><a href="#home">DM </a></h1>
        </div>
        <div className={active}>
          <ul onClick={removeNavbar}  className="navLists">
            <li className="navItem">
              <a href="#about" className="navLink"><span className='headerNumber'></span>About</a>
            </li>
            <li className="navItem">
              <a href="#skills" className="navLink"><span className='headerNumber'></span>Skills</a>
            </li>
            <li className="navItem">
              <a href="#projects" className="navLink"><span className='headerNumber'></span>Projects</a>
            </li>
            <li className="navItem">
              <a href="#contact" className="navLink"><span className='headerNumber'></span>Contact Me</a>
            </li>
              <button className='btn'>
                <a  href="Modi_Devanshi_Resume.pdf" download="Modi_Devanshi_Resume.pdf">Resume</a>
              </button>
          </ul>

          <div onClick={removeNavbar} className="closeNavbar">
              <AiFillCloseCircle className='icon'/>  
          </div>
        </div>
        <div onClick={showNavbar} className="toggleNavbar">
          <TbGridDots className="icon"/>
        </div>
      </header>
  )
}

export default Navbar