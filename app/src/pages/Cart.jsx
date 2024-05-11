import { useContext } from 'react';
import './Cart.css';
import DataContext from './../content/DataContext';

function Cart(){
    const cart = useContext(DataContext).cart;
    
    
    return(
        <div className='all'>
            <h1>Your cart</h1>
            <div className='cart'>
                <label>Product</label>
                <label>Price</label>
                <label>Quantity</label>
                <label>Total</label>
                <label>Delete</label>
            </div>
            <div>
                {cart.map(cp => <div className='cart' key={cp._id}>
                <img src={'/images/' + cp.image}></img>
                <div className='inter'>
                    <h4>{cp.title}</h4>
                    <p>{cp.category}</p>
                </div>
                <label>${cp.price}</label>
                <label>{cp.quantity}</label>
                <label>${cp.price * cp.quantity}</label>
                <button>X</button>
                </div>)}
            </div>
        </div>
    )
}

export default Cart