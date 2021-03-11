# Intro - full E-commence build

It is my clone of amazon online shopping site, with React and basic Material UI, firebase deployment.
strip.js dealing with the payment method (@stripe/stripe-js && @stripe/react-stripe-js)

# Deployed with firebase

https://monstera-shopping.web.app/

# Issues during the deployment

1, "lint": "eslint ." shall be "lint": "eslint" in package JSON
2, To deploy both api and frontend, run $ (npm run build &&) firebase deploy --only hosting and $ firebase deploy --only functions separately
(firebase init )
