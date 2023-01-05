import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProjectsContext from './ProjectsContext';
import projects from '../data/ProjectsData';
import technologies from '../data/TechnologiesData';

function ProjectsProvider({ children }) {
  const [projectsList] = useState(projects);
  const [loading, setLoading] = useState(true);
  const [filterByTech, setFilterTech] = useState();
  const [filterByCourse, setFilterCourse] = useState('');
  const [enabledFavorite, setEnabledFavorite] = useState(false);
  const [enabledTech, setEnabledTech] = useState(false);
  const [techList, setTechList] = useState();
  const [enabledCourse, setEnabledCourse] = useState(false);
  const [clearFilter, setClearFilter] = useState(false);
  const [idProject, setIdProject] = useState('');

  const requestTechList = () => {
    setTechList(technologies);
    setLoading(false);
  };

  return (
    <ProjectsContext.Provider
      value={{
        projectsList,
        setLoading,
        loading,
        filterByTech,
        setFilterTech,
        filterByCourse,
        setFilterCourse,
        enabledFavorite,
        setEnabledFavorite,
        enabledTech,
        setEnabledTech,
        techList,
        requestTechList,
        enabledCourse,
        setEnabledCourse,
        clearFilter,
        setClearFilter,
        idProject,
        setIdProject,
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
}

ProjectsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProjectsProvider;
