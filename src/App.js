import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';

// Components
import Header from './components/Header';
import HomePage from './components/HomePage';
import BlogPosts from './components/BlogPosts';
import Destinations from './components/Destinations';
import About from './components/About';
import Contact from './components/Contact';
import GuideProfile from './components/GuideProfile';

const App = () => {
  return (
    <Router>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPosts />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/guides" element={<GuideProfile />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
