import { useState } from "react";
import "./Product.css";
import ProductDescription from "./ProductDescription";
import Card from "./Card";

export default function Product(props) {
    return (
        <Card className="Product">
            <div className="Product__outer">
                <ProductDescription
                    title={props.title}
                    price={props.price}
                    description={props.description}
                ></ProductDescription>
                <div className="Product__image">
                    <img src={props.imgUrl}></img>
                </div>
            </div>
        </Card>
    );
}
