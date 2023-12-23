import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro.jsx"
import './App.css';
import Services from "./components/Services/Services.jsx";
import Experience from "./components/Experience/Experience.jsx";
import Works from "./components/Works/Works.jsx";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { themeContext } from "./Context.js";
import { useContext } from "react";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App" style={{ background: darkMode ? 'black' : '', color: darkMode ? 'white' : '' }}>
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
