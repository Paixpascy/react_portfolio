import React from 'react'
import './Home.css'

const Home = () => {
  const name='pascaline mahoro'

  return (
    <>
    <div id='home' className='home'>
      <div className='intro'>
    <p>hello my name is <span>{name.toUpperCase()}</span></p>
    <p> a very enthusiastic person specialized in web and app development </p>
  </div>
  <div className='profile-pic'>
    <img src='./images/profile.jpg' alt='profile' height='300px'></img>
  </div>
  </div>
    </>
  )
}

export default Home
