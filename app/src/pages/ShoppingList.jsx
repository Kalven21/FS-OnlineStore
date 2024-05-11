import "./ShoppingList.css";
import Product from './../components/Product';
import { useState } from "react";

function ShoppingList(){
    const [text, setText] = useState('');
    const [list, setList] = useState([]);
    
    function add(){
        console.log('Add clicked!!', text);
        
        // create a copy
        let copy = [...list];
        // modify the copy
        copy.push(text);
        //set the copy back
        setList(copy);
    }
        
        function handleChange(e){
            setText(e.target.value);
        }

    return(
        <div className="shopping">
            <h1>Your Shopping List</h1>
            <div className="rowInfo">
                <input onChange={handleChange} type="text" />
                <button onClick={add}>Add</button>
            </div>

            <h2>Take a look what you bought</h2>
            
            <div className="list">
                <label className="infoz">{list.length}</label>
                {list.map((item) => (
                <li key={item}>{item}</li>
                ))}
            </div>
        </div>
    );
}
/**

 */


export default ShoppingList;