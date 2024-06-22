import React from 'react';
import './Skills.css';
import { TbBrandReactNative } from 'react-icons/tb';
import { IoLogoJavascript } from 'react-icons/io';
import { IoLogoSass } from 'react-icons/io';
import { SiCss3 } from 'react-icons/si';
import { FaHtml5 } from 'react-icons/fa';
import { DiNodejs } from "react-icons/di";
import { FaGitSquare } from 'react-icons/fa';
import { AiOutlineGithub } from 'react-icons/ai';
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql, SiC, SiCplusplus,SiPython } from 'react-icons/si';


const Skills = () => {
  const skillsData = [
    { name: 'React', icon: <TbBrandReactNative className='icon' />, level: 4 },
    { name: 'JavaScript', icon: <IoLogoJavascript className='icon' />, level: 3 },
    { name: 'Sass', icon: <IoLogoSass className='icon' />, level: 4 },
    { name: 'CSS', icon: <SiCss3 className='icon' />, level: 4 },
    { name: 'HTML', icon: <FaHtml5 className='icon' />, level: 5 },
    { name: 'Tailwind CSS', icon: <RiTailwindCssFill className='icon' />, level: 4 },
    { name: 'Node.js', icon: <DiNodejs className='icon' />, level: 4 },
    { name: 'C', icon: <SiC className='icon' />, level: 4 },
    { name: 'C++', icon: <SiCplusplus className='icon' />, level: 4 },
    { name: 'Python', icon: <SiPython className='icon' />, level: 3 }, 
    { name: 'MySQL', icon: <SiMysql className='icon' />, level: 4 },
    { name: 'Git', icon: <FaGitSquare className='icon' />, level: 5},
    { name: 'Github', icon: <AiOutlineGithub className='icon' />, level: 4 },
 
  ];

  const renderSkillLevel = (level) => {
    const circles = [];
    for (let i = 1; i <= 5; i++) {
      circles.push(
        <div key={i} className={`circle ${i <= level ? 'filled' : ''}`}></div>
      );
    }
    return <div className='levelCircles'>{circles}</div>;
  };

  return (
    <section id='skills' className='skills container section'>
      <div className="sectionTitle">
        <h5 className="titleText">Skills <div className="underline"><span></span></div></h5>
      </div>
      <div className="skillsContainer grid">
        <div className="skillGroup">
          <div className="groupTitle">
            <h2 className="title">Web Development</h2>
          </div>
          <div className="generalSkills">
            {skillsData.slice(0, 7).map((skill, index) => (
              <div className="singleSkill" key={index}>
                <div className="iconBox flex">
                  {skill.icon}
                </div>
                <span className='skillName'>{skill.name}</span>
                {renderSkillLevel(skill.level)}
              </div>
            ))}
          </div>
        </div>
        <div className="skillGroup">
          <div className="groupTitle">
            <h2 className="title">Programming & more skills
            </h2>
          </div>
          <div className="generalSkills">
            {skillsData.slice(7).map((skill, index) => (
              <div className="singleSkill" key={index}>
                <div className="iconBox flex">
                  {skill.icon}
                </div>
                <span className='skillName'>{skill.name}</span>
                {renderSkillLevel(skill.level)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
