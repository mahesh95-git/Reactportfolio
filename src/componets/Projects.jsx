import React from 'react'
import '../Style/projects.css'
import {BiMoviePlay} from 'react-icons/bi'
import {TiWeatherPartlySunny} from 'react-icons/ti'
import {BsFillPersonFill} from 'react-icons/bs'
export default function Projects() {
  return (
    <>
  
    <div className="heading-container">
    <h1 id='projects'>Projects</h1>
  </div>
  <div className="projects-container">

<div className="project-container">
  <div className="project-icon">
    <BiMoviePlay />
  </div>
  <div className="project-name">
    <h3>Movies</h3>
  </div>
  <div className="project-description">
  Netflix Clone Website built with React ,JavaScript,html and csswhere the world of entertainment meets innovation! Get ready to experience the thrill of streaming your favorite movies and TV shows in a platform that mirrors the sleekness and functionality of the original Netflix interface.
  </div>
  <div className="project-link">
    <button><a href="https://mymoviesweb.vercel.app/">Live demo</a></button>
  </div>
</div>
<div className="project-container">
  <div className="project-icon">
    <TiWeatherPartlySunny />
  </div>
  <div className="project-name">
    <h3>weather</h3>
  </div>
  <div className="project-description">
  Stay in the know with real-time weather updates directly from reliable sources. Our React Weather Website fetches and displays the most current conditions, ensuring that you're always armed with the latest data.
  </div>
  <div className="project-link">
    <button><a href="https://reatimeweather.vercel.app/">Live demo</a></button>
  </div>
</div>

<div className="project-container">
  <div className="project-icon">
    <BsFillPersonFill />
  </div>
  <div className="project-name">
    <h3>Portfolio</h3>
  </div>
  <div className="project-description">
    developer portfolio Website using
  React.js, JavaScript, and HTML/CSS and version control systems, portfolio showcases the breadth and depth of my technical skills.
  </div>
  <div className="project-link">
    <button><a href="https://maheshrathodportfolio.vercel.app/">Live demo</a></button>
  </div>
</div>


  </div>
  </>
  )
}
