import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import DetailsIcon from '../images/seta-direita.png';
import ProjectsContext from '../context/ProjectsContext';
import favorite from '../images/Heart.png';
import '../styles/simpleCard.css';

function SimpleCard(props) {
  const { id, image, course, projectName, resume, technologies, favorites } = props;
  const { setIdProject } = useContext(ProjectsContext);
  return (
    <div className="card">
      <h3>{projectName}</h3>
      <span className="course">{course}</span>
      <div className="containerBody">
        <img src={image[0].image} alt="Imagem do Projeto" className="imageProject" />
        <div className="resumeContainer"><p className="resume">{resume}</p></div>
        <span>Tecnologias: </span>
        <div className="technologies">
          {
            technologies.map((tech) => (
              <img
                key={tech.name}
                src={tech.icon}
                alt={tech.name}
                title={`${tech.name}`}
                className={`icon-${tech.name}`}
              />
            ))
          }
        </div>

      </div>
      <div className="bottonContainer">
        <div className="favoriteContainer">
          {favorites && (
            <button type="button" className="favorite">
              <img src={favorite} alt="botão favorito" title="Favorito" />
            </button>)}
        </div>
        <div className="detailsContainer">
          <Link
            to={`/${id}`}
            id={`${id}`}
            className="detailsButton"
            onClick={() => setIdProject(id)}
          >
            <img src={DetailsIcon} alt="botão detalhes" title="Mais Detalhes" />
          </Link>
        </div>
      </div>
    </div>
  );
}

SimpleCard.propTypes = {
  id: PropTypes.number,
  image: PropTypes.array,
  course: PropTypes.string,
  projectName: PropTypes.string,
  resume: PropTypes.string,
  technologies: PropTypes.array,
}.isRequired;

export default SimpleCard;
