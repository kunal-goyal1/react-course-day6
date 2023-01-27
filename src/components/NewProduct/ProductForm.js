import React, { useState } from "react";
import "./ProductForm.css";

export default function ProductForm(props) {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredPrice, setEnteredPrice] = useState("");
    const [enteredImage, setEnteredImage] = useState("");
    const [enteredDescription, setEnteredDescription] = useState("");

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const priceChangeHandler = (event) => {
        setEnteredPrice(event.target.value);
    };

    const imageChangeHandler = (event) => {
        setEnteredImage(URL.createObjectURL(event.target.files[0]));
    };

    const descriptionChangeHandler = (event) => {
        setEnteredDescription(event.target.value);
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const productData = {
            title: enteredTitle,
            price: enteredPrice,
            description: enteredDescription,
            image: enteredImage,
        };
        props.onSaveProductData(productData);
    };

    return (
        <form onSubmit={onSubmitHandler}>
            <div className="new-product__controls">
                <div className="new-product__control">
                    <label>title</label>
                    <input
                        value={enteredTitle}
                        type="text"
                        onChange={titleChangeHandler}
                    ></input>
                </div>
                <div className="new-product__control">
                    <label>Price</label>
                    <input
                        value={enteredPrice}
                        type="number"
                        onChange={priceChangeHandler}
                    ></input>
                </div>
                <div className="new-product__control">
                    <label>description</label>
                    <input
                        value={enteredDescription}
                        type="text"
                        onChange={descriptionChangeHandler}
                    ></input>
                </div>
                <div className="new-product__control">
                    <label>Product Image</label>
                    <input
                        type="file"
                        name="myImage"
                        accept="image/png, image/gif, image/jpeg"
                        onChange={imageChangeHandler}
                    />
                </div>
            </div>
            <div className="new-product__actions">
                <button>Add Product</button>
            </div>
        </form>
    );
}
