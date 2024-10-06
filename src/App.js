
import './App.css';
//import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import About from './about/About';
import Skill from './skills/Skill';
import Projects from './projects/Projects';
import Contacts from './Contacts/Contacts';
import Home from './Home/Home';
import Footer from './Footer/Footer';
function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Skill/>
    <Projects/>
    <Contacts/>
    <Footer/>
    </>
  )
}

export default App;
