import React from "react";
import ProductForm from "./ProductForm";
import "./NewProduct.css";

export default function NewProduct(props) {
    const saveProductDataHandler = (enteredProductData) => {
        const productData = {
            ...enteredProductData,
            imgUrl: enteredProductData.image,
            id: Math.random().toString(),
        };
        props.onAddProduct(productData);
    };
    return (
        <div className="new-product">
            <ProductForm
                onSaveProductData={saveProductDataHandler}
            ></ProductForm>
        </div>
    );
}
