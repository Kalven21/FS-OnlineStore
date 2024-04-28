import { useEffect , useState} from "react";
import Product from "../components/Product";
import DataService from '../services/DataService';
import "./Catalog.css";

function Catalog (){
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [visibleProducts, setVisibleProducts] = useState([]);

    function loadCatalog(){
        const prods = DataService.getProducts();
        setProducts(prods);
        setVisibleProducts(prods);
    }

    function loadCategories(){
        const cats = DataService.getCategories();
        setCategories(cats);
    }

    //is called when the component loads
    useEffect(function(){
        loadCatalog();
        loadCategories();
    }, []);

    function filter(cat){
        // pick some from products => visibleProducts
        let filterProds = products.filter(prod => prod.category ==cat)
        setVisibleProducts(filterProds);
    }

    function clearFilter(){
        setVisibleProducts(products);
    }
    function searchByText(e){
        let text = e.target.value;
        //filter where product title is equal to text
        let filterProds = products.filter(prod => prod.title.toLowerCase().includes(text.toLowerCase()))
        setVisibleProducts(filterProds);
    }

    return(
        <div className="catalog">
            <h2>Check our amazing catalog!</h2>
        
        <div>
            <div className="categories">
                <button className="btn" onClick={clearFilter}>All</button>
                {categories.map(cat => 
                <button className="btn" onClick={() => filter(cat) } 
                key={cat}>{cat}
                </button>)}
            </div>

            <div className="search">
                <input 
                onChange={searchByText}
                type="search" 
                className="form-control"
                placeholder='Search...'>
                </input>
            </div>
        </div>


            <div className="products">
                {visibleProducts.map( prod => <Product key={prod._id} data={prod} />)}
            </div>
        </div>
    );
}

export default Catalog;