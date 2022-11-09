import logo from './logo.svg';
import './App.css';
import Mainroutes from './Routes/Mainroutes';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
    <Mainroutes />
    <Footer />
    </div>
  );
}

export default App;
