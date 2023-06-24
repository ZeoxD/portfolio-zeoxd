//styles & images
import './App.css';

//pages & components
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import SimplePaper from "./components/SimplePaper"
import Home from "./pages/Home"
import About from "./pages/About"

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <div className="App-container">
        <SimplePaper classComponent="container-card">
          <Home />
          <About />
        </SimplePaper>
      </div>
    </div>
  );
}

export default App;
