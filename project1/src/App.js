import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Aboutme from './components/pages/Aboutme';
import Experience from './components/pages/Experience';
import Hobbies from './components/pages/Hobbies';
import Qualifications from './components/pages/Qualifications';
import Skills from './components/pages/Skills';
import Contactme from './components/pages/Contactme';
import Certifications from './components/pages/Certifications';
import Workshops from './components/pages/Workshops';
import Projects from './components/pages/Projects';
import './App.css';

function App() {
  return(
    <div className='App'>
      <Navbar/>
      <Routes>
        <Route path="Aboutme"element ={<Aboutme/>}/>
        <Route path="Experience"element ={<Experience/>}/>
        <Route path="Hobbies"element ={<Hobbies/>}/>
        <Route path="Qualifications"element ={<Qualifications/>}/>
        <Route path="Skills"element ={<Skills/>}/>
        <Route path="Contactme"element ={<Contactme/>}/>
        <Route path="Certifications"element ={<Certifications/>}/>
        <Route path="Workshops"element ={<Workshops/>}/>
        <Route path="Projects"element ={<Projects/>}/>
     </Routes>
      
    </div>
  );
}

export default App;