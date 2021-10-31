import React from 'react'
import './Home.css'

const Home = () => {
  const checkout = () => {
  }

  return <div className='container'>
    <div className='text-container'>
      <h1>Monetized API</h1>
      <p>
        If you are interested in signing up for this API,
        you will have to put a credit card on file through
        Stripe's API. In return you will get an API Key that
        you can use to start using this API.
      </p>
      <button className='get-started' onClick={checkout}>Get Started</button>
    </div>
  </div>
}

export default Home
