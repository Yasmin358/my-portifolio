import React, { useContext, useEffect, useState } from 'react';
import Filter from '../Components/Filters';
import Header from '../Components/Header';
import SimpleCard from '../Components/SimpleCard';
import ProjectsContext from '../context/ProjectsContext';
import '../styles/projects.css';
import pattern from '../images/pattern.png';
import Pagination from '../Components/Pagination';

function Projects() {
  const { projectsList, loading, setLoading,
    enabledFavorite, enabledTech, filterByTech, filterByCourse,
    enabledCourse, setEnabledCourse, clearFilter,
    setClearFilter, setEnabledFavorite, setEnabledTech } = useContext(ProjectsContext);

  const [currentPage, setCurrentPage] = useState(1);
  const six = 6;
  const recordsPerPage = six;

  const cleanAllFilters = async () => {
    await setClearFilter(false);
    await setEnabledFavorite(false);
    await setEnabledCourse(false);
    await setEnabledTech(false);
  }

  useEffect(() => {
    setLoading(false);
  }, [clearFilter, currentPage, loading, projectsList, recordsPerPage, setClearFilter, setEnabledCourse, setEnabledFavorite, setEnabledTech, setLoading]);

  let nPages;

  const filterList = () => {
    let originalList = projectsList.reverse();
    nPages = Math.ceil(projectsList.length / recordsPerPage);
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    originalList = originalList.slice(indexOfFirstRecord, indexOfLastRecord);

    if (clearFilter === true) {
      cleanAllFilters();
      return originalList;
    }

    if (enabledFavorite) {
      const favoriteList = projectsList.filter((item) => item.favorite === true);
      return favoriteList;
    }

    if (enabledTech) {
      let techList = projectsList;
      const array = filterByTech;

      array.forEach((List) => {
        techList = techList.filter((item) => item.technologies.some((tech) => (
          tech.name === List.value)));
      });
      return techList;
    }

    if (enabledCourse) {
      if (filterByCourse.value === 'Todos') {
        setEnabledCourse(false);
        return originalList;
      }
      let CourseList = projectsList;
      CourseList = CourseList.filter((item) => item.course === filterByCourse.value);
      return CourseList;
    }

    return originalList;
  };

  return (
    <section className="body" style={{ backgroundImage: `url(${pattern})` }}>
      <main className="main">
        <Header title="Projetos" />
        <Filter />
        <div className="projects">
          {!loading && filterList().map((project) => (
            <SimpleCard
              key={project.id}
              id={project.id}
              image={project.image}
              projectName={project.name}
              resume={project.resume}
              technologies={project.technologies}
              course={project.course}
              favorites={project.favorite}
            />
          ))}

        </div>
        {!loading
          && <Pagination
            nPages={nPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />}
      </main>
    </section>
  );
}

export default Projects;
