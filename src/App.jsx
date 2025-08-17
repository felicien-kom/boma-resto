

import './styles/App.css';
import Header from './components/Header';
import './styles/style.scss';
import { createContext, useContext, useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Gallery from './components/Gallery';

// Création du contexte
const LangContext = createContext();

// Provider à mettre en haut de ton app
const LangProvider = ({ children }) => {
    const [lang, setLang] = useState("FR");
    return (
      <LangContext.Provider value={{ lang, setLang }}>
        {children}
      </LangContext.Provider>
    );
};

// Hook pratique pour utiliser la langue dans les composants
export const useLang = () => useContext(LangContext);

function App() {
  useEffect(() =>{
      document.body.classList.add('light');
  }, []);
  const dataHeader = [];
  
  const dataAbout = [];
  const dataMenu = [];
  const dataGallery = [];
  const dataContact = [];
  const dataFooter = [];

  return (
    <LangProvider>
      <Header />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Contact />
      <Footer />
    </LangProvider>
  )
}

export default App;
