import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Catalog from './pages/Catalog';
import ShoppingList from './pages/ShoppingList';

function App() {
  return (
    <div className="App">
    <Navbar />
    <h1>Welcome to my super store!!!!</h1>
    <Catalog />
    <ShoppingList />
    <Footer />
    </div>
  );
}

export default App;
