import React from 'react'
import Typewriter from 'typewriter-effect'
import '../Style/main.css'
import {
  AiOutlineInstagram,
  AiFillGithub,
  AiFillLinkedin,

} from "react-icons/ai";
export default function Main() {
  return (
    <div className='banner-container'>
  <div className="container1">
    <div className='name-container'>
    <h5><span className='red'>Hello</span> I am Mahesh Rathod</h5>
    </div>
 <div className="introduction-container">
    <h1>
    <Typewriter
  options={{
    strings: ['Frontend Developer', 'designer','Programmer'],
    autoStart: true,
    loop: true,
    delay:200
  }}
/>
    </h1>
<div className="description">
    I'm a passionate developer who loves to learn new technologies and build cool stuffs.<br></br>
</div>
 </div>

 <div className="social-meadia-icons">
            <a href="https://instagram.com/mahesh_rathod272?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D">
              <AiOutlineInstagram />
            </a>
            <a href="https://github.com/mahesh95-git">
              <AiFillGithub />
            </a>
            <a href="https://www.linkedin.com/in/mahesh-rathod-666507258/">
              <AiFillLinkedin />
            </a>
          </div>
          <div className="cv-container">
    <button>Download Resume</button>
 </div>
  </div>
  <div className="container2">
  <img src="mahesh1.png" alt="" />
  </div>
    </div>
  )
}
