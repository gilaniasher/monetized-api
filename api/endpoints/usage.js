const { stripe_secret } = require('../secrets.json')
const stripe = require('stripe')(stripe_secret)

module.exports.handler = async event => {
  const customerId = event.queryStringParameters.customerId
  if (!customerId) return { statusCode: 400, body: 'Missing customerId query string parameter' }

  const invoice = await stripe.invoices.retrieveUpcoming({ customer: customerId })
  return { statusCode: 200, body: JSON.stringify(invoice) }
}
