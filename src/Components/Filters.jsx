import React, { useContext, useEffect } from 'react';
import Select from 'react-select';
import ProjectsContext from '../context/ProjectsContext';
import favorite from '../images/Heart.png';
import favorite2 from '../images/Heart2.png';
import clear from '../images/caixa.png';
import '../styles/filters.css';

function Filter() {
  const { techList, loading, setEnabledFavorite, filterByCourse, setEnabledCourse,
    filterByTech, setFilterTech, requestTechList, setEnabledTech, setFilterCourse,
    enabledFavorite, setClearFilter,
  } = useContext(ProjectsContext);

  useEffect(() => {
    requestTechList();
  }, [loading, requestTechList]);

  const filterButton = () => {
    if (enabledFavorite === true) {
      setEnabledFavorite(false);
    }
    setEnabledFavorite(true);
  };

  const filterValues = (selectedOption) => {
    setFilterTech(selectedOption);
    setEnabledTech(true);
  };

  const filterCourse = (selectedOption) => {
    setFilterCourse(selectedOption);
    setEnabledCourse(true);
  };

  const clearButton = () => {
    setClearFilter(true);
  };

  const options = [
    { value: 'Todos', label: 'Todos' },
    { value: 'Trybe', label: 'Trybe' },
    { value: 'Senac', label: 'Senac' },
    { value: 'IFSC', label: 'IFSC' },
  ];

  const heartEnabled = <img src={favorite} alt="icone favorito" />;
  const heartDisabled = <img src={favorite2} alt="icone favorito" />;

  return (
    <div className="filters">
      <span>Filtrar por: </span>
      <Select
        className="techSelect"
        onChange={filterValues}
        value={filterByTech}
        isMulti
        placeholder="Tecnologia"
        options={!loading && techList.map((element, index) => (
          { id: index, value: element.name, label: element.name }))}
      />

      <Select
        className="courseSelect"
        onChange={filterCourse}
        value={filterByCourse}
        placeholder="Curso"
        options={options}
      />
      <div className="buttonContainer">
        <button
          type="button"
          className="filterButton"
          onClick={filterButton}
        >
          {enabledFavorite === true ? heartEnabled : heartDisabled}
          Favoritos
        </button>
        <button
          type="button"
          className="clearButton"
          onClick={clearButton}
        >
          <img src={clear} alt="icone limpar" />
          Limpar Filtros
        </button>
      </div>
    </div>
  );
}

export default Filter;
