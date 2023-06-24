//styles & images
import './App.css';

//pages & components
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import SimplePaper from "./components/SimplePaper"

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <div className="App-container">
        <SimplePaper classComponent="container-card">Hello</SimplePaper>
      </div>
    </div>
  );
}

export default App;
