import React from 'react';
import './Home.css';
import { TbArrowBigRightLines, TbChevronsDown } from 'react-icons/tb';
import { AiFillGithub, AiOutlineInstagram } from 'react-icons/ai';
import { LiaLinkedin } from 'react-icons/lia';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  return (
    <section id='home' className='home section'>
      <div className="leftIcons">
        <div className="socials grid">
          <a href="https://github.com/devanshimodi03" target="_blank" rel="noopener noreferrer"><AiFillGithub className="icon" /></a>
          <a href="https://www.linkedin.com/in/modi-devanshi-89795a282/" target="_blank" rel="noopener noreferrer"><LiaLinkedin className="icon" /></a>
          <a href="https://www.instagram.com/devanshimodi_31/" target="_blank" rel="noopener noreferrer"><AiOutlineInstagram className="icon" /></a>
          <div className="line"></div>
        </div>
      </div>
      <div className="container homeContent">
        <span className="introText">
          Hello, my name is
        </span>
        <h1 className="title">
          Devanshi Modi
        </h1>
        <span className="subTitle">
          <Typewriter
            words={['Front-end Developer']}
            loop={false}
            cursor
            cursorStyle='.'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
        <p className="homeParagraph">
          I code within required coding standards and styles to serve the exact need.
        </p>
        <div className="lowerHomeSection">
          <button className='contactBtn'>
            <a className='flex' href="#contact">
              Contact Me <TbArrowBigRightLines className='icon' />
            </a>
          </button>
          <div className="scrollDiv">
            <a href="#about" className='flex'>
              <h6 className="scroll">Scroll Down <TbChevronsDown className='icon' /></h6>
            </a>
          </div>
        </div>
      </div>
      <div className="rightEmail">
        <div>
          <div className='emailAddress'>
            <a href="mailto:devanshimodi3112@gmail.com">devanshimodi3112@gmail.com</a>
          </div>
          <div className="line"></div>
        </div>
      </div>
    </section>
  );
}

export default Home;
