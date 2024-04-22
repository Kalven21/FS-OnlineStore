import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Catalog from './pages/Catalog';

function App() {
  return (
    <div className="App">
    <Navbar />
    <h1>Welcome to my super store!!!!</h1>
    <Catalog />
    <Footer />
    </div>
  );
}

export default App;
