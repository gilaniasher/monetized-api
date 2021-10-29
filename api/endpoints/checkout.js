const stripe_secret = require('../secrets.json').stripe_secret
const stripe = require('stripe')(stripe_secret)

module.exports.handler = async event => {
  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    payment_method_types: ['card'],
    line_items: [{ price: 'price_1JpxnYCQo6B1S35hIiXR1bTM' }],
    success_url: 'http://google.com',
    cancel_url: 'http://google.com'
  })

  return {
    statusCode: 200,
    body: JSON.stringify(session)
  }
}