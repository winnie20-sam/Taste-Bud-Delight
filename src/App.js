import "./App.css";
import Home from "./Components/home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonal";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Work />
      <Testimonial />
      <Contact/>
      <Footer />
     
    </div>
  );
}

export default App;