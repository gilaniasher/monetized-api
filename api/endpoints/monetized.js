const { stripe_secret } = require('../secrets.json')
const stripe = require('stripe')(stripe_secret)
const database = require('serverless-dynamodb-client').doc

module.exports.handler = async event => {
  // Check if api key exists in our database
  const apiKey = event.headers['x-api-key']

  if (!apiKey)
    return { statusCode: 401 }

  const result = await database.query({
    TableName: 'usersTable-monetized-api',
    IndexName: 'ApiKey',
    KeyConditionExpression: 'apiKey = :key',
    ExpressionAttributeValues: { ':key': apiKey }
  }).promise()

  if (result.Count === 0)
    return { statusCode: 404 }

  // Update API call count for user
  const { customerId, itemId } = result.Items[0]

  await database.update({
    TableName: 'usersTable-monetized-api',
    Key: { customerId },
    UpdateExpression: 'set calls = calls + :val',
    ExpressionAttributeValues: { ':val': 1 }
  }).promise()

  // Record Usage with Stripe
  await stripe.subscriptionItems.createUsageRecord(itemId, { quantity: 1, timestamp: 'now', action: 'increment' })

  // Actual API work would happen here
  return { statusCode: 200, body: 'Monetized API Data!' }
}
