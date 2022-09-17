# Serverless Node 16 Backend

## Secrets
This backend requires a `secrets.json` file in the `/api` folder to use the Stripe module. These can be found by logging into your Stripe account.

```
{
    "stripe_secret": "",
    "webhook_secret": "",
}
```

## Deployment
This command will deploy the Lambdas and DynamoDB resources to AWS:

```
npm run deploy
```

## Local Server

You can host the Lambdas and DynamoDB table locally with the following command:

```
npm start
npm run view-table # GUI for viewing local DynamoDB
```

## Local Stripe Testing

Stripe uses a webhook to tell our backend when a customer has signed up for the API after the /checkout endpoint is called. To test this locally, install the [Stripe CLI](https://stripe.com/docs/stripe-cli).

Then run:
```
stripe login
stripe listen --forward-to localhost:3000/webhook
```

Now when a user checksout from the Stripe UI, they will call the webhook endpoint of our backend which adds the user to the db and gives them an API key.