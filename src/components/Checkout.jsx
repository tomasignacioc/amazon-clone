import React from 'react';
import { useStateValue } from '../StateProvider/StateProvider';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import Subtotal from "./Subtotal"

const Checkout = () => {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/PrimeRewards/LP_Revamp/PC_Header_Banner._CB468631809_.jpg"
                    alt="" className="checkout__ad" />

                <div>
                    <h2 className="checkout__title">Your shopping basket</h2>
                    {basket.map((item, i) => (
                        <CheckoutProduct
                            id={i}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>

                <div className="checkout__right">
                    <Subtotal />
                </div>
            </div>
        </div>
    )
}

export default Checkout
