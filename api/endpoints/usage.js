const { stripe_secret } = require('../secrets.json')
const stripe = require('stripe')(stripe_secret)
const database = require('serverless-dynamodb-client').doc

module.exports.handler = async event => {
  let customerId = event.queryStringParameters.customerId

  if (!customerId) {
    const apiKey = event.queryStringParameters.apiKey
    if (!apiKey) return { statusCode: 400, body: 'customerId or apiKey query string parameter is required' }
    
    const res = await database.query({
      TableName: 'usersTable-monetized-api',
      IndexName: 'ApiKey',
      KeyConditionExpression: 'apiKey = :key',
      ExpressionAttributeValues: { ':key': apiKey }
    }).promise()

    if (res.Count === 0)
      return { statusCode: 404, body: 'Customer not found' }
    else
      customerId = res.Items[0].customerId
  }

  const invoice = await stripe.invoices.retrieveUpcoming({ customer: customerId })
  return { statusCode: 200, body: JSON.stringify(invoice) }
}
