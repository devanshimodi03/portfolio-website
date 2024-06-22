import React from 'react'
import './project.css'
import {FiGithub} from 'react-icons/fi'
import img from '../../Assets/playgear.png'
import img2 from '../../Assets/Movie Recommendation System.png'
import img3 from '../../Assets/Trio Tourist.png'
// import img4 from '../../Assets/BMI Calculator.png'
// import img5 from '../../Assets/Thumbnail.png'
// import img6 from '../../Assets/database.jpeg'
// import img7 from '../../Assets/soccer.png'
// import img8 from '../../Assets/friendsApp.png'
// import img9 from '../../Assets/cvGenerator.png'

const data = [
  {
    id: 1,
    image: img,
    github: 'https://github.com/devanshimodi03/Play-Gear-E-commerce-',
    title: 'PlayGear(E-Commerce)',
    desc: 'An online store for gaming products,games,and accessories. It’s a simple yet powerful platform designed to provide a smooth shopping experience for all the gaming enthusiasts out there 🎮 ',
    tech1: 'Html',
    tech2: 'CSS',
    tech3: 'JavaScript',
  },

  {
    id: 2,
    image: img2,
    github: 'https://github.com/devanshimodi03/FlixHub-Recommendation-System',
    title: 'FlixHub Recommendation System',
    desc: 'Developed a FlixHub movie recommendation system that suggests films based on user preferences. Utilized machine learning algorithms to analyze user behavior and recommend personalized movie choices. ',
    // tech1: 'Html',
    tech2: 'Tailwindcss',
    tech3: 'JavaScript',
    tech4: 'python',
  },
  // {
  //   id: 3,
  //   image: img3,
  //   github: 'https://github.com/devanshimodi03/BMI-Calculator-using-React.js',
  //   title: 'BMI Calculator',
  //   desc: 'A simple web tool to calculate Body Mass Index (BMI) using user-input weight and height. Provides BMI value and health status. Built with HTML, CSS, and JavaScript.',
  //   tech1: 'Html',
  //   tech2: 'CSS',
  //   tech3: 'JavaScript',
  //   tech4: 'React.js',
  // },
  {
    id: 3,
    image: img3,
    github: 'https://github.com/devanshimodi03/Trio-Tourist-using-React.js',
    title: 'Trio Tourist',
    desc: 'Trio-Tourist is a comprehensive travel planning tool designed to help users effortlessly plan their trips.Trio-Tourist is fully responsive, ensuring an optimal user experience on all devices.Key features include destination search making travel planning',
    tech1: 'Html',
    tech2: 'CSS',
    tech3:'React.js',
    tech4:'firebase',
  },
  
  
  
]

const Project = () => {
  return (
    <section id='projects' className='projects container section'>
      <div className="sectionTitle">
      {/* <span class="titleNumber">03 . </span>   */}
      <h5 className="titleText">Projects <div className="underline"><span></span></div></h5>
      </div>

      <div className="projectContainer grid"> 
          { 
          data.map(({id, github, image, liveLink, desc, demo, title, tech1, tech2, tech3, tech4}) =>{
            return (
              <div key={id} className="singleProject">
                <div className="externalLinks flex">
                <div className="githubIcon">
                <a href={github} target="blank"><FiGithub className="icon"/></a>
                </div>
                </div>
              
             <div className="imgDiv">
              <a href={liveLink} target="blank">
              <img src={image} alt={title} /> 
              </a>
             </div>
             <div className="projectTitle">
              <h3>{title}</h3>
             </div>
             <div className="desc">
              {desc}
             </div>
             <div className="technologies flex">
                <small> {tech1} </small>
                <small> {tech2} </small>
                <small> {tech3} </small>
                <small> {tech4} </small>
                
             </div>
             </div>
            )

           })
           }
      </div>

    </section>
  )
}

export default Project
