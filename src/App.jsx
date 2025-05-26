import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './assets/styles/main.css';

function App() {
    return (
        <div className='App'>
            <Header />
            <Navbar />
            <main>
                <About />
                <Projects />
                <Skills />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;