import NavBar from './components/NavBar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Responsibilities from './components/Responsibilities.jsx';
import Expertise from './components/Expertise.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import ProjectControls from './components/ProjectControls.jsx';
import CvSection from './components/CvSection.jsx';
import QrSection from './components/QrSection.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <NavBar />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Responsibilities />
        <Expertise />
        <Skills />
        <Projects />
        <ProjectControls />
        <CvSection />
        <QrSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
