import React from 'react'
import './About.css'
import img from '../../Assets/passportsize.png'
import { TbCloudDown } from "react-icons/tb";

const About = () => {
  return (
    <section id='about' className='about section container'>
      <div className="sectionTitle">
      {/* <span className="titleNumber">01. </span>   */}
      <h5 className="titleText">About Me <div className="underline"><span></span></div></h5>
      </div>

      <div className="sectionContent grid">
        <div className="textSection">
          <h4>
          Hello! I'm Devanshi, a dedicated and enthusiastic Front-end developer with solid grounding in HTML,CSS,Javascript,Tailwind CSS and React.js, and a working knowledge of Node.js.
          <br/>
          I am currently pursuing my BE from LDRP Institute of Technology and Reaserch in Gandhinagar specialisation in computer Engineering.
          <br/>
          My goal is to continue learning and growing as a developer,
          and I am eager to contribute to innovative projects in a collaborative team environment.
          </h4>

          <div className="aboutBtn">
          <a href="Modi_Devanshi_Resume.pdf"
        download= "Modi_Devanshi_Resume.pdf" className="flex">
          Download CV <TbCloudDown className='icon'/></a>
          </div>
        </div>
         <div className="aboutImgDiv">
          <img className='aboutImg' src={img} alt="Modi Devanshi" />
         </div>
      </div>
    </section>
  )
}

export default About