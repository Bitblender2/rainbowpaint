import "./App.css";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Tips from "./components/Tips";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Tips />
    </div>
  );
}

export default App;
