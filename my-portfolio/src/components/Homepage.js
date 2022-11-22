import React, { useState } from 'react';
import Header from './Header';
import Nav from './Nav';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Footer from './Footer';

const Homepage= () => {
    const [currentPage, setCurrentPage] = useState('#');

    const renderPage = () => {
        if (currentPage === "about") {
            return <About />;
          }
          if (currentPage === "skills") {
            return <Skills />;
          }
          if (currentPage === "projects") {
            return <Projects />;
          }
          if (currentPage === "contact") {
            return <Contact />;
          }
          if (currentPage === "resume") {
          return <Resume />;
          }
        };
      
        const handlePageChange = (page) => setCurrentPage(page);
      
        return (
          <div>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
            <Header />
            {renderPage()}
            <Footer />
          </div>
        );
}

export default Homepage;