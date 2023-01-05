import React, { useContext, useEffect } from 'react';
// import favorite from '../images/heart.png';
import '../styles/projects.css';
import '../styles/projectDetails.css';
import pattern from '../images/pattern.png';
import ProjectsContext from '../context/ProjectsContext';

function ProjectDetails() {
  const { loading, idProject, setLoading,
    projectsList } = useContext(ProjectsContext);

  useEffect(() => {
    setLoading(false);
  }, [loading, setLoading, projectsList]);

  const filterProject = (list) => {
    const projeto = list.filter((project) => project.id === Number(idProject));
    return projeto;
  };

  return (
    <section className="body" style={{ backgroundImage: `url(${pattern})` }}>
      <main className="main">
        {!loading
          && filterProject(projectsList).map((detailsProject) => (
            <div className="projectContainer" key={detailsProject.id}>
              <header>
                <h1>{`${detailsProject.name}`}</h1>
              </header>
              <div className="details">
                <p>
                  <b>Curso: </b>
                  {` ${detailsProject.course}`}
                </p>
                <p>
                  <b>Modulo/Disciplina: </b>
                  {` ${detailsProject.module}`}
                </p>
                <p><b>Tecnologias usadas nesse projeto:</b></p>
                <div className="technologies">
                  {detailsProject.technologies.map((tech) => (
                    <img
                      key={tech.name}
                      src={tech.icon}
                      alt={tech.name}
                      title={`${tech.name}`}
                      className={`icon-${tech.name}`}
                    />
                  ))}
                </div>
                <p>
                  <b>Sobre: </b>
                  {`${detailsProject.about}`}
                </p>
                <p>
                  <b>Duração do projeto: </b>
                  {`${detailsProject.duration}`}
                </p>
                <p>
                  <b>Iniciado em: </b>
                  {`${detailsProject.dateBegin}`}
                </p>
                <p>
                  <b>Finalizado em: </b>
                  {`${detailsProject.dateEnd}`}
                </p>
                <p>
                  <b>Status do projeto: </b>
                  {`${detailsProject.status}`}
                </p>
                <p>
                  <b>Visualizar o projeto:</b>
                  <br />
                  <a href={`${detailsProject.link}`}>
                    {`${detailsProject.link}`}
                  </a>
                </p>
                <p>
                  <b>Link do Repositório:</b>
                  <br />
                  {detailsProject.repository === 'Indisponivel' ? 'Indisponivel' :
                    <a href={`${detailsProject.repository}`}>
                      {`${detailsProject.repository}`}
                    </a>}
                </p>
                <p><b>Imagens do Projeto:</b></p>
                <div className="imagesProject">
                  {detailsProject.image.map((img) => (
                    <img
                      key={img.id}
                      src={img.image}
                      alt="imagem do projeto"
                      className="imageProject"
                    />
                  ))}
                </div>
              </div>
            </div>))}
      </main>
    </section>
  );
}

export default ProjectDetails;
