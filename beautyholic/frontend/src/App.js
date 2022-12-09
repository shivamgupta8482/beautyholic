import "./App.css";
import Mainroutes from "./Routes/Mainroutes";
import Footer from "./Components/Footer";
import Navbar from "./Components/Home/Navbar";
import DropDownNavbar from "./Components/Home/DropDownNavbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <DropDownNavbar />
      <Mainroutes />
      <Footer />
    </div>
  );
}

export default App;
