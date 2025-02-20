import React, { useState } from 'react'
import '../navbar/nav.css'
import {Link} from "react-scroll"
import Logo from "../imgs/logo1.png"
import { FaBars } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
// import Skill from '../content/skill';

function Navbar() {
    const [showMenu,setShowMenu]=useState(false)
  return (   
        <nav className="navbar">
          <div className="logo">
            <img src={Logo} alt="" width={50} height={40} />
            <h2 style={{marginTop:'8px',color:'white'}}>PortFolio</h2>
            </div> 
          <div className="desktopMenu">
            <Link activeClass='active' to='home' spy={true} smooth={true} offset={-200} duration={500} className="desktopMenuListItem">Home</Link>
            <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">About</Link>
            <Link activeClass='active' to='education-section' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Education</Link>
            <Link activeClass='active' to='skill' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Skills</Link>
            <Link activeClass='active' to='project-section' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Projects</Link>
          </div>
          <Link  to='contact' spy={true} smooth={true} offset={-200} duration={500} ><button className='desktopMenuBtn'>Contact Me</button></Link>
            {/* <img src={Logo} alt ="" width={20} height={20} className="MobMenu" onClick={()=>{setShowMenu(!showMenu)}}/> */}
            <div className="MobMenu" onClick={()=>{setShowMenu(!showMenu)}}>{showMenu ? <h3><ImCross/></h3>:<h3><FaBars/></h3>}</div>
          <div className="navMenu" style={{display: showMenu?'flex':'none'}}>
            <Link activeClass='active' to='home' spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>About</Link>
            <Link activeClass='active' to='project-section' spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Projects</Link>
            <Link activeClass='active' to='education-section' spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Education</Link>
            <Link activeClass='active' to='skill' spy={true} smooth={true} offset={-100} duration={500} className="ListItem"onClick={()=>setShowMenu(false)}>Skills</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className="ListItem"onClick={()=>setShowMenu(false)}>Contact</Link>
          </div>
          
        </nav>
  
  )
}

export default Navbar