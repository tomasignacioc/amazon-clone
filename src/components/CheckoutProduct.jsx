import React from 'react'
import { useStateValue } from '../StateProvider/StateProvider';
import './CheckoutProduct.css'

const CheckoutProduct = ({ id, image, title, price, rating, hiddeButton }) => {
    const [{ basket }, dispatch] = useStateValue();

    function removeFromBasket() {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            payload: id
        })
    }
    return (
        <div className="checkoutProduct">
            <img src={image} alt="" className="checkoutProduct__image" />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>
                {!hiddeButton && (
                    <button onClick={removeFromBasket}>Remove from basket</button>
                )}
            </div>
        </div>
    )
}

export default CheckoutProduct
