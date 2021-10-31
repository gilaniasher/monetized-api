const { stripe_secret } = require('../secrets.json')
const stripe = require('stripe')(stripe_secret)
const database = require('serverless-dynamodb-client').doc
const { randomBytes } = require('crypto')

const genApiKey = async () => {
  do {
    var apiKey = randomBytes(16).toString('hex')

    var result = await database.query({
      TableName: 'usersTable-monetized-api',
      IndexName: 'ApiKey',
      KeyConditionExpression: 'apiKey = :key',
      ExpressionAttributeValues: { ':key': apiKey }
    }).promise()
  } while (result.Count !== 0)

  return apiKey
}

/**
 * Allows our backend to respond to Stripe events
 */
module.exports.handler = async event => {
  const { data, type } = JSON.parse(event.body)

  switch (type) {
    case 'checkout.session.completed':
      const customerId = data.object.customer
      const subscriptionId = data.object.subscription

      console.log(`Customer ${customerId} subscribed to plan ${subscriptionId}`)

      // Get the item id that the user registered for
      const subscription = await stripe.subscriptions.retrieve(subscriptionId)
      const itemId = subscription.items.data[0].id

      // Generate unique API key for user
      const apiKey = await genApiKey()

      // Store customer in db
      await database.put({
        TableName: 'usersTable-monetized-api',
        Item: { customerId, apiKey, itemId }
      }).promise()

      break
    case 'invoice.paid':
      break
    case 'invoice.payment_failed':
      break
  }

  return { statusCode: 200 }
}
