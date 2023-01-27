import React from "react";
import "./ProductFilter.css";

export default function ProductFilter(props) {
    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    };

    return (
        <div className="product-filter">
            <div className="product-filter__control">
                <label>Filter by price</label>
                <select value={props.selected} onChange={dropdownChangeHandler}>
                    <option value="0 - 200">0 - 200</option>
                    <option value="201 - 400">201 - 400</option>
                    <option value="401 - 600">401 - 600</option>
                    <option value="above 600">above 600</option>
                </select>
            </div>
        </div>
    );
}
