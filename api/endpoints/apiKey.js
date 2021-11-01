const { package } = require('../utils')
const { stripe_secret } = require('../secrets.json')
const stripe = require('stripe')(stripe_secret)
const database = require('serverless-dynamodb-client').doc

module.exports.handler = async event => {
  // Use the session id to look up customer through Stripe API
  const session_id = event.queryStringParameters.session_id
  const session = await stripe.checkout.sessions.retrieve(session_id)
  const customer = await stripe.customers.retrieve(session.customer)

  const customerId = customer.id
  const name = customer.name

  // Get customer item from database
  const data = await database.get({ TableName: 'usersTable-monetized-api', Key: { customerId } }).promise()

  if (!data.Item)
    return package(404, 'User not found')
  else
    return package(200, JSON.stringify({ name, apiKey: data.Item.apiKey }))
}
