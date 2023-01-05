import React from 'react';
import PropTypes from 'prop-types';
import '../styles/pagination.css';

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  return (
    <nav className="pagNav">
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <button
            type="button"
            className="page-link-nav-prev"
            onClick={prevPage}
            disabled={currentPage <= 1}
            href="#"
          >
            Previous
          </button>
        </li>
        {pageNumbers.map((pgNumber) => (
          <li
            key={pgNumber}
            className={`page-item ${currentPage === pgNumber ? 'active' : ''} `}
          >
            <button
              type="button"
              onClick={() => setCurrentPage(pgNumber)}
              className="page-link-number"
              disabled={pgNumber === currentPage}
            >
              {pgNumber}
            </button>
          </li>
        ))}
        <li className="page-item">
          <button
            type="button"
            className="page-link-nav-next"
            onClick={nextPage}
            href="#"
            disabled={currentPage === nPages}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  nPages: PropTypes.number,
  currentPage: PropTypes.number,
  setCurrentPage: PropTypes.func,
}.isRequired;

export default Pagination;
