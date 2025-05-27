import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Documentation from './components/Documentation';

import './assets/styles/main.css';

// Componente para la página principal
const Home = () => (
  <>
    <Header />
    <Navbar />
    <main>
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
    <Footer />
  </>
);

// Componente para la página de documentación
const DocPage = () => (
  <>
    <Navbar /> {/* Mantén la navegación para volver */}
    <Documentation />
    <Footer />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/documentation" element={<DocPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;