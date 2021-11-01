# Serverless Framework Node HTTP API on AWS

HTTP API with Node.js running on AWS Lambda/API Gateway with the Serverless Framework.

## Deployment

```bash
$ serverless deploy
```

_Note_: In current form, after deployment, your API is public and can be invoked by anyone. For production deployments, you might want to configure an authorizer. For details on how to do that, refer to [http event docs](https://www.serverless.com/framework/docs/providers/aws/events/apigateway/).

## Invocation

After successful deployment, you can call the created application via HTTP:

```bash
curl https://xxxxxxx.execute-api.us-east-1.amazonaws.com/
```

## Local Server

You can invoke your function locally by using the following command:

```bash
$ serverless invoke local --function hello
```

Alternatively, it is also possible to emulate API Gateway and Lambda locally by using `serverless-offline` plugin. In order to do that, execute the following command to start local emulation with:

```bash
$ npm start
This runs: sls offline start --host 127.0.0.1
```

Adding the host flag lets me make the API calls from a VS Code REST client.

Running this command will also start a local DynamoDB instance. The serverless dynamodb client package allows us to use the same code to reference our local or deployed database.

## Viewing Local DynamoDB Instance

Run ```npm install -g dynamodb-admin```

After running the ```sls offline``` step from above or just ```sls dynamodb start```, run:

```bash
$ dynamodb-admin
```

Then visit `http://localhost:8001` to view the tables

## Local Stripe Testing

Stripe uses a webhook to tell our backend when a customer has signed up for the API after the /checkout endpoint is called. To test this locally, install the [Stripe CLI](https://stripe.com/docs/stripe-cli).

Then run:
```bash
$ stripe login
$ stripe listen --forward-to localhost:3000/webhook
```

Now when a user checksout from the Stripe UI, they will call the webhook endpoint of our backend which adds the user to the db and gives them an API key.