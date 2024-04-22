import Product from "../components/Product";
import "./Catalog.css";

function Catalog (){
    
    const products = [
        {
            title: 'Apple',
            price: 2.45,
            image: "apples.jpg",
            category: "Fruit",
            _id: "apvlesgru"
        },
        {
            title: 'Cereal',
            price: 5.93,
            image: "cereal.jpg",
            category: "Cereal",
            _id: "dibnwust"
        },
        {
            title: 'Coffe',
            price: 4.23,
            image: "coffe.jpg",
            category: "Coffe",
            _id: "flpwmsia"
        },
        {
            title: 'Hersheys',
            price: 3.76,
            image: "hershey's.jpg",
            category: "Chocolate",
            _id: "ekvinrh"
        },
        {
            title: 'Soap',
            price: 5.23,
            image: "soap.jpg",
            category: "Cleaning",
            _id: "glsigbet"
        },
        {
            title: 'Television',
            price: 201.43,
            image: "television.jpg",
            category: "Electronic",
            _id: "dlbuensu"
        },
        {
            title: 'Tomato',
            price: 1.43,
            image: "tomato.jpg",
            category: "Vegetable",
            _id: "bisnrghs"
        },
    ];
        
    
    return(
        <div className="catalog">
            <h2>Check our amazing catalog!</h2>
        
            <div className="products">
                {products.map( prod => <Product data={prod} />)}
            </div>
        </div>
    );
}

export default Catalog;