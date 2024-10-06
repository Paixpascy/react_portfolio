import React from 'react'
import './Skills.css'

const Skill = () => {
  return (
    <>
    <div id="skills" className='skills'>
    <div className='skill'>
        <h1>SKILLS</h1>
    </div>
    <div className='skill-list'>
        <div className='front-end'>
            <ul>
                <p>frontend</p>
                <li>html</li>
                <li>css</li>
                <li>javascript</li>
                <li>react.js</li>
                <li>vue.js</li>
            </ul>
        </div>
        <div className='back-end'>
            <ul>
                <p>backend</p>
                <li>node.js</li>
                <li>database(mongobd and mysql)</li>
                <li>next.js</li>
                <li>git</li>
            </ul>
        </div>
    </div>
    </div>
    </>
  )
}

export default Skill
