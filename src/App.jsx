import "./App.css";
import Color from "./components/Color";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Sider from "./components/Sider";
import Tips from "./components/Tips";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Sider />
      <Tips />
      <Color />
      <Footer />
    </div>
  );
}

export default App;
