const {stripe_secret, stripe_webhook} = require('../secrets.json')
const stripe = require('stripe')(stripe_secret)

/**
 * Allows our backend to respond to Stripe events
 */
module.exports.handler = async event => {
  /*
  try {
    var stripeEvent = stripe.webhooks.constructEvent(
      JSON.stringify(event.body),
      event.headers['stripe-signature'],
      stripe_webhook
    )
  } catch (err) {
    console.log('Webhook signature verification failed')
    return { statusCode: 400 }
  }

  const data = stripeEvent.data
  const eventType = stripeEvent.type
  */

  const {data, type} = JSON.parse(event.body)

  switch (type) {
    case 'checkout.session.completed':
      const customerId = data.object.customer
      const subscriptionId = data.object.subscription

      console.log(`Customer ${customerId} subscribed to plan ${subscriptionId}`)

      // Get the item id that the user registered for
      const subscription = await stripe.subscriptions.retrieve(subscriptionId)
      const itemId = subscription.items.data[0].id

      // Generate API key for user (very secure)
      const apiKey = '123456789'

      // Store customer in db
      // { customerId, apiKey, itemId }

      break
    case 'invoice.paid':
      break
    case 'invoice.payment_failed':
      break
  }

  return { statusCode: 200 }
}
