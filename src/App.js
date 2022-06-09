import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutMe />
    </div>
  );
}

export default App;
