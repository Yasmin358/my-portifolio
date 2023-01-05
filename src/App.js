import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/AboutMe';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import ProjectsProvider from './context/ProjectsProvider';

function App() {
  return (
      <ProjectsProvider>
      <Routes>
        <Route exact path="/" element={ <Home />} />
        <Route exact path="/about" element={ <About /> } />
        <Route exact path="/contact" element={ <Contact /> } />
        <Route exact path="/projects" element={ <Projects /> } />
        <Route
          exact path="/:id"
          element={ <ProjectDetails /> }
        />
      </Routes>
      </ProjectsProvider>
  );
}

export default App;
