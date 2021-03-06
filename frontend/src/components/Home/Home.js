import React from 'react'
import './Home.css'
import axios from 'axios'
import { server } from '../../utils/API'

const Home = ({ history }) => {
  const checkout = async () => {
    const res = await axios.post(`${server}/checkout`)
    window.location.href = res.data.url
  }

  const goToApi = () => {
    history.push('/use-api')
  }

  return <div className='home-container'>
    <div className='home-text-container'>
      <h1>Monetized API</h1>
      <p>
        If you are interested in signing up for this API,
        you will have to put a credit card on file through
        Stripe's API. In return you will get an API Key that
        you can use to start using this API.
      </p>
      <button onClick={checkout}>Get Started</button>

      <h1>Already a Subscriber?</h1>
      <button onClick={goToApi}>Click Here to use the API</button>
    </div>
  </div>
}

export default Home
