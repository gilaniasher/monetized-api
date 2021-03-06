import React from 'react'
import './ErrorCheckout.css'

const ErrorCheckout = () => {
  return <div className='error-container'>
    <div className='error-text-container'>
      <h1>Something Went Wrong</h1>
      <p>
        There was a problem registering you for this monetized API.
        Please try again later.
      </p>
    </div>
  </div>
}

export default ErrorCheckout