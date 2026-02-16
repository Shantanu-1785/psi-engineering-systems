import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Homepage } from './components/Homepage';
import { AboutUs } from './components/AboutUs';
import { HeaderSection } from './components/HeaderSection';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about-us" element={
            <>
              <HeaderSection />
              <AboutUs />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;