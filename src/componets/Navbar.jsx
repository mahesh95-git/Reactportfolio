import React,{useState,useRef} from "react";
import "../Style/Navbar.css";
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
export default function Navbar() {
    const [click, setClick] = useState(true);
    const [classchange, setchanges] = useState('display');
    const [classchange1,setchanges1]=useState('mobile-cotainer1')
    const ref=useRef()
    const handller=()=>{
if(click){
    setClick(false)
    setchanges('mobile-menu-container')
    setchanges1('mobile-cotainer')
   
}
else{
    setClick(true)
    setchanges1('mobile-cotainer1')
 setchanges("display")
 
}

}

  return (
    <div className="nav-container">
      <div className="logo">
        <h2>
          <span className="color-black">PORT</span>
          <span className="folio">FOLIO</span>
        </h2>
      </div>
      {/* <!-- Nav Bar --> */}
      <ul className="menu-container">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#aboutme">About Me</a>
        </li>
        <li>
          <a href="#aboutme">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      
      <div className={classchange1} ref={ref}>
     <div className="icon-container">
            {
click?<AiOutlineMenu onClick={handller}/>:<AiOutlineClose onClick={handller}/>
            }
        </div>
        <div className={classchange}>
          <li>
            <a href="#home" onClick={handller}>Home</a>
          </li>
          <li>
            <a href="#aboutme"onClick={handller} >About Me</a>
          </li>
          <li>
          <a href="#skills" onClick={handller}>Skills</a>
        </li>
          <li>
            <a href="#projects" onClick={handller}>Projects</a>
          </li>
          <li>
            <a href="#contact" onClick={handller}>Contact</a>
          </li>{" "}
        </div>
      </div>
    </div>
  );
}
