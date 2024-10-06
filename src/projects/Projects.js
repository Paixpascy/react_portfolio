import React from 'react'
import './Projects.css'
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <>
    <div id='projects' className='projects'>
    <div className='proj'>
        <h1>PROJECTS</h1>
    </div>
    <div className='project-list'>
        <div className='project1'>
            <img src='./images/calc.png' alt='' height='120px'width='100px'></img>
            <p>calculator</p>
            <Link><button>Github link</button></Link>
        </div>
        <div className='project2'>
            <img src='./images/player.png' alt='' height='100px'></img>
            <p>landing page</p>
            <Link><button>Github link</button></Link>
        </div>
        <div className='project3'>
            <img src='./images/landing page.png' alt='' height='100px'></img>
            <p>music player</p>
            <Link><button>Github link</button></Link>
        </div>
    </div>
    </div>
    </>
  )
}

export default Projects
