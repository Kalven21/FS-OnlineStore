import { Link } from 'react-router-dom';
import './Navbar.css';
function Navbar(){
    return (
        <nav className="navbar row">
            <div className="navbar row">
                <Link className='center nav-link title' to='/'>    
                    Market          
                </Link>
                <div className='center'>
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
                        <li className='px'>
                            <Link className='nav-link' to="/cart">
                                Cart
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;