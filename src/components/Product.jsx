import React from 'react'
import "./Product.css"

const Product = () => {
    return (
        <div className="product">
            <div className="product__info">
                <p>the lean startup</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>19.99</strong>
                </p>
                <div className="product__rating">
                    <p>⭐⭐⭐⭐⭐</p>
                </div>
            </div>
            <img src="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg" alt="" width="200px" height="450px" />
            <button>Add to basket</button>
        </div>
    )
}

export default Product
