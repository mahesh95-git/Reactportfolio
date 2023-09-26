import React from 'react'
import Navbar from './Navbar'
import Main from './Main'
import SkillsAbout from './SkillsAbout'
import Contact from './Contact'
import Projects from './Projects'
export default function Home() {
  return (
    <div className='main'>
      <Navbar/>
      <Main/>
      <SkillsAbout/>
      <Projects/>
      <Contact/>
    </div>
  )
}
