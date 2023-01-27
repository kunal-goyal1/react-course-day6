import "./App.css";
import { react, useState } from "react";
import Products from "./components/Products";
import NewProduct from "./components/NewProduct/NewProduct";

const DUMMY_PRODUCTS = [
    {
        id: 1,
        title: "A Book",
        price: 150,
        description: "this is a nice book",
        imgUrl: "https://pngimg.com/d/book_PNG2111.png",
    },
    {
        id: 2,
        title: "Laptop",
        price: 1500,
        description: "A gaming laptop with latest graphics",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNJVvb7uge_HkHg0iXQ9Oo7ud3dhAFsParNQ&usqp=CAU",
    },
];

function App() {
    const [products, setProducts] = useState(DUMMY_PRODUCTS);

    const addProductHandler = (product) => {
        setProducts((prevProducts) => {
            return [product, ...prevProducts];
        });
    };

    return (
        <div className="App">
            <h1>welcome to prepbytes</h1>
            <NewProduct onAddProduct={addProductHandler}></NewProduct>
            <Products items={products}></Products>
        </div>
    );
}

export default App;
