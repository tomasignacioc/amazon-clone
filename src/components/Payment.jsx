import React, { useState, useEffect } from 'react';
import './Payment.css'
import { useStateValue } from '../StateProvider/StateProvider'
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from "react-currency-format";
import { Link, useHistory } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import axios from '../axios';


const Payment = () => {
    const [{ basket, user }, dispatch] = useStateValue();
    const subtotal = basket?.reduce((acc, item) => acc + item.price, 0)

    const stripe = useStripe();
    const elements = useElements();
    const history = useHistory();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: "post",
                url: `/payments/create?total=${subtotal * 100}`
            })
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [basket]);
    

    const handleSubmit = async e => {
        // do stripe stuff...
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {
            // paymentIntent = payment confirmation
            
            setSucceeded(true);
            setError(null);
            setProcessing(false);

            history.replace('/orders')
        })
    }

    const handleChange = e => {
        // Listen for changes in the CardElement
        // and display any errors as the customer types their card details
        setDisabled(e.empty)
        setError(e.error ? e.error.message : "")
    }

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout (
                    <Link to="/checkout">{basket?.length} items</Link>
                    )
                </h1>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery adress</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 react lane</p>
                        <p>los angeles, CA</p>
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket?.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment method</h3>
                    </div>
                    <div className="payment__details">

                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />

                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={subtotal}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || disabled ||
                                succeeded}>
                                    <span>{processing ? <p>Processing</p> :
                                    "Buy Now"}</span>
                                </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Payment;
