const products = [
    {
        title: 'Apple',
        price: 2.45,
        image: "apples.jpg",
        category: "food",
        _id: "apvlesgru"
    },
    {
        title: 'Cereal',
        price: 5.93,
        image: "cereal.jpg",
        category: "food",
        _id: "dibnwust"
    },
    {
        title: 'Coffe',
        price: 4.23,
        image: "coffe.jpg",
        category: "food",
        _id: "flpwmsia"
    },
    {
        title: 'Hersheys',
        price: 3.76,
        image: "hershey's.jpg",
        category: "food",
        _id: "ekvinrh"
    },
    {
        title: 'Soap',
        price: 5.23,
        image: "soap.jpg",
        category: "cleaning",
        _id: "glsigbet"
    },
    {
        title: 'Television',
        price: 201.43,
        image: "television.jpg",
        category: "electronics",
        _id: "dlbuensu"
    },
    {
        title: 'Tomato',
        price: 1.43,
        image: "tomato.jpg",
        category: "food",
        _id: "bisnrghs"
    },
];


class DataService{
    getProducts(){
        return products;
    }
    getCategories(){
        return['food', 'electronics','cleaning','toys','stationary']
    }
    saveProducts(){

    }
}

export default new DataService();