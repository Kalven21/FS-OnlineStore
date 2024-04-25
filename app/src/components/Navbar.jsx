import './Navbar.css';
function Navbar(){
    return (
        <div className="navbar">
            <h1>Market 🛒</h1> 
            <h2>Home</h2>    
            <div>
                <input type='text'></input>
                <button>Search</button>
            </div>
        </div>
    )
}

export default Navbar;