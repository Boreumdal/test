import React from 'react'

const Login = () => {
  return (
    <div className='h-[92vh] flex justify-center items-center'>
      <div className='w-6/12 h-[61%] login-card shadow rounded'>
        <div className='w-6/12 px-9 h-full border flex flex-col gap-3 justify-center bg-white'>
          <h1 className='font-bold text-xl'>Login your Account</h1>
          <form className=''>
            <div className='mt-2'>
              <label htmlFor="username">Username:</label>
              <input type="text" id='username' className='mt-1 block border shadow rounded w-full text-sm py-2 px-3 border-gray-300' placeholder='Enter your username...' required />
            </div>
            <div className='mt-2'>
              <label htmlFor="password">Password:</label>
              <input type="password" id='password' className='mt-1 block border shadow rounded w-full text-sm py-2 px-3 border-gray-300' placeholder='Enter your password...' required />
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