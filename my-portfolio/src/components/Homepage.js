import React, { useState } from 'react';
import Header from './Header';
import Nav from './Nav';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

const App = () => {
    const [activeNav, setActiveNav] = useState('About');

    const renderPage = () => {
        if (activeNav === "about") {
            return <About />;
          }
          if (activeNav === "skills") {
            return <Skills />;
          }
          if (activeNav === "projects") {
            return <Projects />;
          }
          if (activeNav === "contact") {
            return <Contact />;
          }
          if (activeNav === "resume")
          return <Resume />;
        };
      
        const handlePageChange = (page) => setActiveNav(page);
      
        return (
          <div>
            <Nav activeNav={activeNav} handlePageChange={handlePageChange} />
            <Header />
            {renderPage()}
          </div>
        );
}

export default App;