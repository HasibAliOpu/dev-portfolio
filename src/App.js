import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <Home />
      <Projects />
      <AboutMe />
    </div>
  );
}

export default App;
