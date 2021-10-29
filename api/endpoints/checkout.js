const stripe_secret = require('../secrets.json').stripe_secret
const stripe = require('stripe')(stripe_secret)

/**
 * Creates a Stripe checkout session. The response body
 * has a link that a user can go to to enter their card information
 */
module.exports.handler = async event => {
  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    payment_method_types: ['card'],
    line_items: [{ price: 'price_1JpxnYCQo6B1S35hIiXR1bTM' }],
    success_url: 'http://gilaniasher.github.io/monetized-api/',
    cancel_url: 'http://gilaniasher.github.io/monetized-api/'
  })

  return {
    statusCode: 200,
    body: JSON.stringify(session)
  }
}