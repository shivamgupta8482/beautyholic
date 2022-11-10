import logo from './logo.svg';
import './App.css';
import Mainroutes from './Routes/Mainroutes';
import Footer from './Components/Footer';
import Home from './Components/Home/Home';



function App() {
  return (
    <div className="App">
      <Home />
    <Mainroutes />
    <Footer />
    </div>
  );
}

export default App;
