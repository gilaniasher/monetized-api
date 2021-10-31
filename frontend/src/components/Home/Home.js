import React from 'react'
import './Home.css'
import axios from 'axios'
import { server } from '../../utils/API'

const Home = () => {
  const checkout = async () => {
    const res = await axios.post(`${server}/checkout`)
    window.location.href = res.data.url
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
