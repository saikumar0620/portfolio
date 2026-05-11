import Navbar         from './components/Navbar';
import ScrollProgress  from './components/ScrollProgress';
import BackToTop       from './components/BackToTop';
import Hero            from './components/Hero';
import About           from './components/About';
import Skills          from './components/Skills';
import Projects        from './components/Projects';
import Education       from './components/Education';
import Contact         from './components/Contact';
import Footer          from './components/Footer';

export default function App() {
  return (
    <>
      {/* Fixed UI chrome (does not affect document flow) */}
      <ScrollProgress />
      <BackToTop />

      {/* Page shell */}
      <div className="flex flex-col min-h-screen w-full">
        <Navbar />
        <main className="flex-1 w-full">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
