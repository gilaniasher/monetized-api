import React, { useEffect, useState } from 'react'
import './SuccessCheckout.css'
import axios from 'axios'
import { server } from '../../utils/API'

const SuccessCheckout = ({ location }) => {
  const [name, setName] = useState('')
  const [apiKey, setApiKey] = useState('')

  useEffect(() => {
    const session_id = new URLSearchParams(location.search).get('session_id')

    axios.get(`${server}/showApiKey`, { params: { session_id } }).then(res => {
      setName(res.data.name)
      setApiKey(res.data.apiKey)
    })
  }, [location.search])

  return <div className='container'>
    <div className='text-container'>
      <h1>Successful Checkout</h1>
      <h3>Your API Key: {apiKey}</h3>
      <p>
        Thank you, {name}, for purchasing this monetized API.
        Whenever you make an API call, include this API Key in your header
        so that your requests can be charged by usage.
      </p>
    </div>
  </div>
}

export default SuccessCheckout
