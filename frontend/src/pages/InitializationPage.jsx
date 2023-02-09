import React from 'react'
import axios from 'axios'

const InitializationPage = () => {
    const initializeAdmin = () => {
        axios.get('http://localhost:8000/initialization/private/administrator')
        .then(r => {
            console.log(r)
        })
        .catch(e => {
            console.log(e)
        })
    }

  return (
    <div className='border h-[80vh] flex justify-center flex-col'>
        <div className='w-1/3 mx-6'>
            <h1 className='font-bold text-2xl'>Initialization</h1>
            <p className='py-2'>This page is use for admin account initialization. Please click the button to register a admin account</p>
            <button onClick={initializeAdmin} className='mx-auto border px-3 py-1 font-medium bg-orange-500 text-white rounded'>Initialize</button>
        </div>
    </div>
  )
}

export default InitializationPage