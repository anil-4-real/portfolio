import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
function App() {
  return (
    <div className="main" id="home">
      <Header />
      <Hero />
      <AboutMe />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
