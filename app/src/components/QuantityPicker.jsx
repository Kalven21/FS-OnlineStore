import "./QuantityPicker.css";
import { useState } from 'react';

function QuantityPicker(props){
    const [quantity, setQuantity] = useState(1);

    function increase(){
        let value = quantity + 1;
        setQuantity(value);
        props.onChange(value);
    }
    function decrease(){
        if(quantity > 1){
            let value = quantity - 1;
            setQuantity(value);
            props.onChange(value);
        }else{
            let value = quantity;
            setQuantity(value);
        }
    }

    return(
    <div className="qt-picker">
        <button disabled={quantity ==1} onClick={decrease}>-</button>
        <label>{quantity}</label>
        <button onClick={increase}>+</button>
    </div>
    );
}

export default QuantityPicker;