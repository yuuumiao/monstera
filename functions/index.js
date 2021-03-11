const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const express = require("express");
// const cors = require("cors");
const cors = require('cors')({origin: true});
const stripe = require("stripe")('sk_test_51IOWa0LRu5j4rVh2H6CBpA6iz4vIzThzCsYRqHXktEd0B582ML5GqtFddOyh39tblmSbTpKy1WBybfGHDqrTYgQt00zuUIEBLQ')


// API

// - app config
const app = express();


// - Middlewares 

//app.use(cors({ origin: true }));

// app.use(cors({
//     origin:'*', 
//     credentials: true,            //access-control-allow-credentials:true
//     optionSuccessStatus: 200
// }))
    
app.use(express.json());

// - API routes 
app.get('/', (request, response) => response.status(200).send('Hello world'))

app.post('/payments/create', async (request, response) => {

    try{
        const total = request.query.total;
        console.log("total is >>>>", total)
        const paymentIntent = await stripe.paymentIntents.create({
            amount: total,
            currency: "usd",
        })
        response.status(201).send({
            clientSecret: paymentIntent.client_secret,
        })  

    }catch(error){
            functions.logger.error('Error: ' + error);
            response.statusCode = 500;
            response.send({
                'status': 'PAYMENT ERROR' //Optional: customize your error message here
            });

    }
});


// - Listen command
exports.api = functions.https.onRequest(app);

//host at
//http://localhost:5001/monstera-shopping/us-central1/api