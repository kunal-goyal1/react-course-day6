import { prettyDOM } from "@testing-library/react";
import React, { useState } from "react";
import Product from "./Product";
import ProductFilter from "./ProductFilter";
import "./Products.css";

export default function Products(props) {
    const [filteredPrice, setFilteredPrice] = useState("201 - 400");

    const filterChangeHandler = (selectedPrice) => {
        console.log(selectedPrice);
        setFilteredPrice(selectedPrice);
    };

    const filteredProducts = props.items.filter((item) => {
        if (filteredPrice == "above 600") {
            return item.price >= 600;
        }
        const prices = filteredPrice.split(" - ");
        prices[0] = parseInt(prices[0]);
        prices[1] = parseInt(prices[1]);
        return item.price >= prices[0] && item.price <= prices[1];
    });

    let productsContent = <p>no products at this price</p>;
    if (filteredProducts.length > 0) {
        productsContent = filteredProducts.map((product) => {
            return (
                <Product
                    key={product.id}
                    title={product.title}
                    price={product.price}
                    description={product.description}
                    imgUrl={product.imgUrl}
                ></Product>
            );
        });
    }

    return (
        <div>
            <ProductFilter
                selected={filteredPrice}
                onChangeFilter={filterChangeHandler}
            ></ProductFilter>
            <div className="Products">{productsContent}</div>
        </div>
    );
}
