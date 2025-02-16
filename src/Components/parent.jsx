import React from 'react'
import Navbar from './navbar/navbar';
import Home from './content/home'
import Contact from './content/contact';
import About from './content/about';
import Education from './content/education';
import Skill from './content/skill';
import Project from './content/project';
import SkillSection from './content/skillCard';

function Parent() {
  return (
    <>
    <Navbar/>
      <Home/>
    <About/>
    <Education /> 
    <Skill/>
    <Project/>
    
    <Contact/>
   
    </>
    
  )
}

export default Parent        
