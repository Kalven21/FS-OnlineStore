import { useState } from "react";
import DataContext from "./DataContext";
import Product from './../components/Product';

function GlobalProvider(props){
    const[user, setUser] = useState({id: 12345, name: "Kevin"});
    const[cart, setCart] = useState([]);
    
    function addProductToCart(product){
        // 3 steps
        const copy = [...cart];
        copy.push(product);
        setCart(copy);
    }
    function removeProductsFromCart(){}
    function clearCart(){}

    return (
        <DataContext.Provider value={{
            user: user,
            cart: cart,
            addProductToCart: addProductToCart,
            removeProductsFromCart, removeProductsFromCart,
            clearCart: clearCart
        }}>
            {props.children}
        </DataContext.Provider>
    );
}

export default GlobalProvider;