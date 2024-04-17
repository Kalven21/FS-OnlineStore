import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import QuantityPicker from './components/QuantityPicker';

function App() {
  return (
    <div className="App">
      <h1>Welcome to my super store!!!!</h1>
    
    <Navbar />
    <Navbar></Navbar>
    <QuantityPicker />

    <Footer />
    </div>
  );
}

export default App;
