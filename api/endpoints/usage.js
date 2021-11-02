const { package, database } = require('../utils')
const { stripe_secret } = require('../secrets.json')
const stripe = require('stripe')(stripe_secret)

module.exports.handler = async event => {
  let customerId = event.queryStringParameters.customerId

  if (!customerId) {
    const apiKey = event.queryStringParameters.apiKey
    if (!apiKey) return package(400, 'customerId or apiKey query string parameter is required')
    
    const res = await database.query({
      TableName: 'usersTable-monetized-api',
      IndexName: 'ApiKey',
      KeyConditionExpression: 'apiKey = :key',
      ExpressionAttributeValues: { ':key': apiKey }
    }).promise()

    if (res.Count === 0)
      return package(404, 'Customer not found')
    else
      customerId = res.Items[0].customerId
  }

  const invoice = await stripe.invoices.retrieveUpcoming({ customer: customerId })
  return package(200, JSON.stringify(invoice))
}
