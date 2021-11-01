import React, { useState } from 'react'
import './MonetizedApi.css'
import axios from 'axios'
import { server } from '../../utils/API'

const MonetizedApi = () => {
  const formatter = new Intl.NumberFormat('en-us', { style: 'currency', currency: 'USD' })
  const [apiKey, setApiKey] = useState('')
  const [result, setResult] = useState('')

  const callApi = async () => {
    setResult('')
    const headers = { 'x-api-key': apiKey }
    const res = await axios.get(`${server}/monetized`, { headers })
    setResult(res.data)
  }

  const getUsage = async () => {
    setResult('')
    const res = await axios.get(`${server}/usage`, { params: { apiKey } })
    const amt_remaining = formatter.format(res.data.amount_remaining / 100)
    setResult(`Invoice: ${amt_remaining}`)
  }

  return <div className='api-container'>
    <h1>Use Monetized API</h1>
    <input placeholder='Enter Your API Key' onChange={e => setApiKey(e.target.value)} />

    <div className='btn-container'>
      <button class='api-button' onClick={callApi}>Submit API Call</button>
      <button class='api-button' onClick={getUsage}>Get Usage Report</button>
    </div>

    {JSON.stringify(result)}
  </div>
}

export default MonetizedApi
