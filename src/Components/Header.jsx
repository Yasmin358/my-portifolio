import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/header.css';
import burguerIcon from '../images/menu.png';

function Header(props) {
  const { title } = props;
  return (
    <div className="header">
      <div className="dropdown">
        <button type="button" className="menuButton">
          <img src={burguerIcon} alt="botão menu" />
        </button>
        <div className="menu">
          <nav>
            <Link to="/" className="menu-item">
              Home
            </Link>
            <Link to="/about" className="menu-item">
              Sobre Mim
            </Link>
            <Link to="/projects" className="menu-item">
              Projetos
            </Link>
            <Link to="/contact" className="menu-item">
              Contato
            </Link>
          </nav>
        </div>
      </div>
      <div className="title">
        <h1>
          {`${title}`}
        </h1>
      </div>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
