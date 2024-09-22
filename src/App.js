import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './components/styles.css';
import logo from './assets/iedckerala_logo.jpg';
import Home from './components/home'; 
import About from './components/about';
import Programs from './components/programs';
import Startups from './components/startup';
import Contact from './components/contact';

const App = () => {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <div className="header-content">
            <img src={logo} alt="IEDC Logo" className="header-logo" />
            <h1>IEDC - Central University of Kerala</h1>
          </div>
        </header>

        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/about">About IEDC</Link>
          <Link to="/programs">Programs</Link>
          <Link to="/startups">Startups</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/startups" element={<Startups />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>&copy; 2024 IEDC - Central University of Kerala. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
