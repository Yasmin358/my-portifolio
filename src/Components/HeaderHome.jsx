import React from 'react';
import { Link } from 'react-router-dom';
import about from '../images/about.png';
import projects from '../images/programing.png';
import contact from '../images/smartphone.png';
import '../styles/headerHome.css';

function Header() {
  return (
    <nav className="navegation">
      <Link to="/about">
        <button type="button">
          <img src={about} alt="about me icon " />
          Sobre Mim
        </button>
      </Link>
      <Link to="/projects">
        <button type="button">
          <img src={projects} alt="projects icon " />
          Projetos
        </button>
      </Link>
      <Link to="/contact">
        <button type="button">
          <img src={contact} alt="contact icon " />
          Contato
        </button>
      </Link>
    </nav>
  );
}

export default Header;
