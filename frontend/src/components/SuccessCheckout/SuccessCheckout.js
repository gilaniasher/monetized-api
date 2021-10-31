import React from 'react'
import './SuccessCheckout.css'

const SuccessCheckout = () => {
  return <div className='container'>
    <div className='text-container'>
      <h1>Successful Checkout</h1>
      <h3>Your API Key: 123456789</h3>
      <p>
        Thank you for purchasing this monetized API.
        Whenever you make an API call, include this API Key in your header
        so that your requests can be charged by usage.
      </p>
    </div>
  </div>
}

export default SuccessCheckout
