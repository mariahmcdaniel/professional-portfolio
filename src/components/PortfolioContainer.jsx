import React, { useState } from 'react';
import NavTabs from './Nav';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Resume from '../pages/Resume'
import Portfolio from '../pages/Portfolio';
import Footer from './Footer';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Portfolio');

 
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div>
      <header>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      </header>
      {renderPage()}
      <Footer />
    </div>
  );
}
