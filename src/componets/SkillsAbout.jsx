import React from "react";
import "../Style/skills.css";
export default function Skills() {

  const skills=['c','javascript','Css','html','mongodb','express','react','node','c++','java']
  return (
    <>
      <div className="skills-about-container">
        <div className="heading-container">
    
          <h1 id="aboutme">About</h1>
          
        </div>
        <div className="about-container">
          <p>
            <span className="red size">Hello</span> there! I'm Mahesh Rathod, a
            passionate frontend developerwith a knack for crafting captivating
            and user-centric web experiences. With a blend of creativity and
            technical expertise, I transform ideas into beautifully designed and
            highly functional websites. At heart, I'm a problem solver. I thrive
            on taking complex designconcepts and turning them into accessible
            and responsive websites. I'm well-versed in HTML, CSS, and
            JavaScript,and react using these tools to breathe life into designs
            and ensure a smooth and engaging user experience across various
            devices and platforms.
          </p>
        </div>
        <div className="heading-container">
     
          <h1 id="skills">Skills</h1>
        
        </div>
        <div className="skill-container">
          <div className="skills-name">
  
           { skills.map(element => {
              return(<div className="language-name">{element}</div>)
            })}
        
          </div>
        </div>
      </div>
    </>
  );
}
