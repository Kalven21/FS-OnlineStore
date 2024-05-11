import axios from 'axios';
import Product from './../components/Product';


const products = [
    {
        title: "Apple",
        price: 2.45,
        image: "apples.jpg",
        category: "food",
        _id: "apvlesgru"
    },
    {
        title: "Cereal",
        price: 5.93,
        image: "cereal.jpg",
        category: "food",
        _id: "dibnwust"
    },
    {
        title: "Coffe",
        price: 4.23,
        image: "coffe.jpg",
        category: "food",
        _id: "flpwmsia"
    },
    {
        title: "Hersheys",
        price: 3.76,
        image: "hershey's.jpg",
        category: "food",
        _id: "ekvinrh"
    },
    {
        title: "Soap",
        price: 5.23,
        image: "soap.jpg",
        category: "cleaning",
        _id: "glsigbet"
    },
    {
        title: "Television",
        price: 201.43,
        image: "television.jpg",
        category: "electronics",
        _id: "dlbuensu"
    },
    {
        title: "Tomato",
        price: 1.43,
        image: "tomato.jpg",
        category: "food",
        _id: "bisnrghs"
    },
];


class DataService{
    serverURL = "http://127.0.0.1:5000/api";

    async getProducts(){
        // todo: retrieve prod from the server
        let response = await axios.get(this.serverURL + "/products")
        return response.data;

        //return products;
    }
    async getCategories(){
        let response = await axios.get(this.serverURL + "/categories")
        return response.data;
        //['food', 'electronics','cleaning','toys','stationary']
    }
    async saveProducts(product){
        let response = await axios.post(this.serverURL + "/products", product);
        return response.data;
    }
}

export default new DataService();