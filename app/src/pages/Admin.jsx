import "./Admin.css";
import {useState} from 'react';

function Admin(){
    //coupona
    const[coupon, setCoupon] = useState({
        code:'',
        discount:'',
    });
    const[list, setList] = useState([]);
    
    function handleCoupon(e){
        let text =e.target.value;
        let name =e.target.name;
        
        let copy = {...coupon};
        copy[name] = text;
        setCoupon(copy);
    }
    function saveCoupon(){
        console.log('coupon',coupon);
        
        let copy = [...list];
        copy.push(coupon);
        setList(copy);
    }
    
    //products
    const[product,setProduct] = useState({
        title: '',
        price: 0,
        image:"",
        category:""
    });
    const[prolist, setProlist] = useState([]);
    
    function handleProduct(e){
        const text = e.target.value;
        const name = e.target.name;

        const copy = {...product}
        copy[name] = text;
        setProduct(copy);
    }
    function saveProduct(){
        console.log(product);

        let copy = [...prolist];
        copy.push(product);
        setProlist(copy);
    }

    return(
        <div>
            <h1>Admin</h1>
            <div className="father">
                <div className='child'>
                    <h2 className="centered">Product</h2>
                    <div>
                        <label>Name:</label>
                        <input onChange={handleProduct} name="title" type="text"></input>
                    </div>
                    <div>
                        <label>Price:</label>
                        <input onChange={handleProduct} name="price" type="number"></input>
                    </div>
                    <div>
                        <button onClick={saveProduct}>Save Product</button>
                    </div>
                </div>

                <div className="child">
                    <h2 className="centered">Cupons</h2>
                
                        <label>Code:</label>
                        <input onChange={handleCoupon} name="code" type="text"></input>
                    
                        <label>Discount:</label>
                        <input onChange={handleCoupon} name="discount" type="number"></input>
                    <div>
                        <button onClick={saveCoupon}>Save Coupon</button>
                    </div>
                </div>
            </div>
            <div className="results">
                <div>
                    <h3>This are the products that you bought: {prolist.length}</h3>
                    <ul className="list">
                        {prolist.map(prod => <li key={prod.title}>{prod.title} - {prod.price}</li>)}
                    </ul>
                </div>
                <div>
                    <h3>This are the code that you used: {list.length}</h3>
                    <ul className="list">
                        {list.map(cp => <li key={cp.code}>{cp.code} - {cp.discount}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Admin;