import React from 'react';
import "./Checkout.css";
import Subtotal from "./Subtotal"

const Checkout = () => {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/PrimeRewards/LP_Revamp/PC_Header_Banner._CB468631809_.jpg"
                alt="" className="checkout__ad" />

                <div>
                    <h2 className="checkout__title">Your shopping basket</h2>
                    {/* BasketItem */}
                    {/* BasketItem */}
                    {/* BasketItem */}
                </div>

                <div className="checkout__right">
                    <Subtotal />
                </div>
            </div>
        </div>
    )
}

export default Checkout
