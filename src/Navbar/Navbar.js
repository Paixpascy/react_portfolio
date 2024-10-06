import React, { useRef } from 'react'
import "./Navbar.css"
import { Link } from 'react-scroll'
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";


const Navbar = () => {
  const btnRef=useRef()
  const showBtn=()=>{
    btnRef.current.classList.toggle('responsive_nav')
  }
  return (
    <>
    <div className='navbar'>
    <div className='logo'>
    <img src='./images/logo.jpg' alt='logo' height='60px'></img>
    </div>
    <div className='links' >
      <nav ref={btnRef}>
      <ul >
        <li><Link activeClass="active" to="home" spy={true} smooth={true} duration={500}>HOME</Link></li>
        <li><Link activeClass="active" to="about" spy={true} smooth={true} duration={500}>ABOUT</Link></li>
        <li><Link activeClass="active" to="skill" spy={true} smooth={true} duration={500}>SKILLS</Link></li>
        <li><Link activeClass="active" to="projects" spy={true} smooth={true} duration={500}>PROJECTS</Link></li>
        <li><Link activeClass="active" to="contacts" spy={true} smooth={true} duration={500}>CONTACTS</Link></li>
          </ul>
        <button className='navbtn closebtn' onClick={showBtn}><FaTimes /></button>
        </nav>
        <button className='navbtn'onClick={showBtn}><FaBars /></button>
    </div>
    
    </div>
    </>

  )
}

export default Navbar
