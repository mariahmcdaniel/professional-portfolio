import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className='container-fluid navCont d-flex g-0'>
    <div className="row navRow g-0 flex-nowrap">
      <div className="col navCol">
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/portfolio"
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/about"
        >
          About Me
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/resume"
        >
          Resume
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact"
        >
          Contact
        </Link>
      </li>
    </ul>
    </div>
    </div>
    </div>
  );
}

export default NavTabs;
