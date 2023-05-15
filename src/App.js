import About from "./components/About";
import Contacts from "./components/Contacts";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
// import Particles from './components/Particle';
import Certification from './components/Certification';

function App() {
  return (
    <>
    {/* <Particles 
    className="particle-canvas"
    params={{
      particles: {
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 900
            }
          },
        shape:{
          type: "circle",
          stroke: {
            width: 6,
            color: "#f9ab00"
          }
        }
      }
    }} /> */}
    <div>
    
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Work/>
      <Certification/>
      <Contacts/>
    </div>
    </>
  );
}

export default App;
