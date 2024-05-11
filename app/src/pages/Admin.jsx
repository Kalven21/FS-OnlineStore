import "./Admin.css";
import {useEffect, useState} from 'react';
import DataService from "../services/DataService";

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

    async function loadCatalog() {
        let prods = await DataService.getProducts();
        setProlist(prods);
    }

    useEffect(function () {
        loadCatalog();
    }, []);

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

        // fixed the price
        let fixedProduct = {...product}
        fixedProduct.price = parseFloat(fixedProduct.price);

        const copy = [...prolist];
        copy.push(fixedProduct);
        setProlist(copy);

        DataService.saveProducts(fixedProduct);

        // call service saceProducts(fixedProduct)
    }

    return(
        <div>
            <h1>Admin</h1>
            <div className="father">
                <div className='child'>
                    <h2 className="centered">Product</h2>
                    <div className="part">
                        <label>Name:</label>
                        <input onChange={handleProduct} name="title" type="text"></input>
                    </div>
                    <div className="part">
                        <label>Price:</label>
                        <input onChange={handleProduct} name="price" type="number"></input>
                    </div>
                    <div className="part">
                        <label>Category:</label>
                        <input onChange={handleProduct} name="category" type="text"></input>
                    </div>
                    <div className="part">
                        <label>Image:</label>
                        <input onChange={handleProduct} name="image" type="text"></input>
                    </div>
                    <div className="but">
                        <button onClick={saveProduct}>Save Product</button>
                    </div>
                </div>

                <div className="child">
                    <h2 className="centered">Cupons</h2> 
                        <div className="part">
                            <label>Code:</label>
                            <input onChange={handleCoupon} name="code" type="text"></input>
                        </div>
                        <div className="part">
                            <label>Discount:</label>
                            <input onChange={handleCoupon} name="discount" type="number"></input>
                        </div>
                    <div className="but">
                        <button onClick={saveCoupon}>Save Coupon</button>
                    </div>
                </div>
            </div>
            <div className="results">
                <div>
                    <h3>This are the products that you have: {prolist.length}</h3>
                    <ul className="list">
                        {prolist.map(prod => <li key={prod.title}>{prod.title} - {prod.price}</li>)}
                    </ul>
                </div>
                <div>
                    <h3>This are the code that you have: {list.length}</h3>
                    <ul className="list">
                        {list.map(cp => <li key={cp.code}>{cp.code} - {cp.discount}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Admin;