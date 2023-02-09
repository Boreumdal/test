import React from 'react'

const InitializationPage = () => {
  return (
    <div className='border h-[80vh] flex justify-center flex-col'>
        <div className='w-1/3 mx-6'>
            <h1 className='font-bold text-2xl'>Initialization</h1>
            <p className='py-2'>This page is use for admin account initialization. Please click the button to register a admin account</p>
            <button className='mx-auto border px-3 py-1 font-medium bg-orange-500 text-white rounded'>Initialize</button>
        </div>
    </div>
  )
}

export default InitializationPage