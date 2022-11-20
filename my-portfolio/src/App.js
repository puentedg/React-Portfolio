import React, { useState } from 'react';
import Header from './components/Header'
import Nav from './components/Nav'
import About from './components/pages/About'
import Skills from './components/pages/Skills'
import Projects from './components/Projects'
import Resume from './components/pages/Resume'
import Contact from './components/pages/Contact'
import Footer from './components/Footer'

const App = () => {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === "About") {
            return <About />;
          }
          if (currentPage === "Skills") {
            return <Skills />;
          }
          if (currentPage === "Projects") {
            return <Projects />;
          }
          if (currentPage === "Contact") {
            return <Contact />;
          }
          return <Resume />;
        };
      
        const handlePageChange = (page) => setCurrentPage(page);
      
        return (
          <div>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
            <Header />
            {renderPage()}
            <Footer/>
          </div>
        );
}

export default App;