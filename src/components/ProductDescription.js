import React from "react";

export default function ProductDescription(props) {
    return (
        <div className="Product__description">
            <span className="Product__bg">EXCLUSIVE</span>
            <h1>{props.title}</h1>
            <h2 className="Product__price">${props.price}</h2>
            <p>{props.description}</p>
        </div>
    );
}
