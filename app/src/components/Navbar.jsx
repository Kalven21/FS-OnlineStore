import { useContext } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import DataContext from '../content/DataContext';
import Cart from './../pages/Cart';

function Navbar(){
    
    let user = useContext(DataContext).user;
    let cart = useContext(DataContext).cart;
    
    return (

        <nav>
            <div className="navbar row">
                <Link className='center nav-link title' to='/'>    
                    Market 🛒         
                </Link>
                <div className='parts center'>
                    <ul className='px row spaceB'>
                        <li className='px'>
                            <Link className='nav-link' aria-current="page" to="/">
                                Home
                            </Link>
                        </li>
                        <li className='px'>
                            <Link className='nav-link' aria-current="page" to="/catalog">
                                Catalog
                            </Link>
                        </li>   
                        <li className='px'>
                            <Link className='nav-link' aria-current="page" to="/list">
                                List
                            </Link>
                        </li>
                        <li className='px'>
                            <Link className='nav-link' aria-current="page" to="/about">
                                About
                            </Link>
                        </li>
                        <li className='px'>
                            <Link className='nav-link' aria-current="page" to="/admin">
                                Admin
                            </Link>
                        </li>
                    </ul>
                    <li className='lis'>
                        <Link className='nav-link' to="/cart">
                            <span>Cart {cart.length}</span>
                        </Link>
                    </li>
                    <button className=''>
                        {user.name}
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;