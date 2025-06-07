import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Documentation from './components/Documentation';
import HeaderSaaS from './SaaS/Header';
import NavBarSaaS from './SaaS/NavBar';
import MainPage from './SaaS/MainPage';
import FooterSaaS from './SaaS/Footer';

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

const SaaS_Sprout = () => (
  <>
    <HeaderSaaS />
    <NavBarSaaS /> {/* Mantén la navegación para volver */}
    <main>
      <MainPage/>
    </main>
    {/* Aquí puedes agregar más secciones específicas de SaaS */}
    <Footer/>
      {/* <FooterSaaS /> */}
  </>
);
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/documentation" element={<DocPage />} />
        <Route path="/SaaS" element={<SaaS_Sprout />} />
      </Routes>
    </HashRouter>
  );
}

export default App;