import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useSystem } from '../context/SystemContext'

const Login = () => {
  const { setToken } = useSystem()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = e => {
    e.preventDefault()

    axios.post('http://localhost:8000/login', { username, password })
      .then(response => {
        setToken(response.data.authToken)
        navigate('/')
      })
  }

  return (
    <div className='h-[92vh] flex justify-center items-center'>
      <div className='w-6/12 h-[61%] login-card shadow rounded'>
        <div className='w-6/12 px-9 h-full border flex flex-col gap-3 justify-center bg-white'>
          <h1 className='font-bold text-xl'>Login your Account</h1>
          <form onSubmit={handleLogin} className=''>
            <div className='mt-2'>
              <label htmlFor="username">Username:</label>
              <input type="text" id='username' onChange={e => setUsername(e.target.value)} className='mt-1 block border shadow rounded w-full text-sm py-2 px-3 border-gray-300' placeholder='Enter your username...' required />
            </div>
            <div className='mt-2'>
              <label htmlFor="password">Password:</label>
              <input type="password" id='password' onChange={e => setPassword(e.target.value)} className='mt-1 block border shadow rounded w-full text-sm py-2 px-3 border-gray-300' placeholder='Enter your password...' required />
            </div>
            <div className='mt-2 invisible'>
              <p className='text-xs border w-fit py-1 px-4 rounded-full bg-red-500 font-medium text-white'>Error</p>
            </div>
            <button type="submit" className='mt-2 bg-blue-500 text-white font-medium shadow rounded w-full text-sm py-2 px-3'>Login</button>
          </form>
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default Login