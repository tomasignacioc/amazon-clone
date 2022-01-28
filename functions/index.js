require('dotenv').config()
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

// API 

// - APP CONFIG
const app = express();

// - MIDDLEWARES
app.use(cors({ origin: true }));
app.use(express.json());

// - API ROUTES
app.get('/', (req, res) => res.status(200).send('hello world'))
app.post('/payments/create', async (req, res) => {
    const total = req.query.total


    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits
        currency: 'usd'
    });
    
    res.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})
// - LISTEN COMMAND

exports.api = functions.https.onRequest(app)

// EXAMPLE ENDPOINT
// http://localhost:5001/challenge-ed072/us-central1/api