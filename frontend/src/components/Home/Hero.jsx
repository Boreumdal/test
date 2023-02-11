import React from 'react'
import { Link } from 'react-router-dom'
import { useSystem } from '../../context/SystemContext'

const Hero = () => {
  const { token, data } = useSystem()
  return (
    <div className='bg-white h-[80vh] border flex flex-col items-center justify-center'>
        <h1 className='text-5xl font-bold py-1'>Student-Centric Management System</h1>
        <p className='py-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores impedit porro esse eius.</p>
        { !token && <Link to='/login' className='mt-5 border-2 border-green-500 bg-green-500 text-white hover:text-green-500 hover:bg-transparent py-1 px-3 rounded font-semibold duration-300 shadow-sm'>Sign me in</Link> }
        { data?.role === '49afe28d956804de0fde8f7bcabd749f495193c53fc5d802355c96ad6f3f46c37e72d18b9830d61de80c7b01f9' && <Link to='/dashboard/student' className='mt-5 border-2 border-green-500 hover:bg-green-500 hover:text-white text-green-500 hover:bg-transparent py-1 px-3 rounded font-semibold duration-300 shadow-sm'>Dashboard</Link> }
        { data?.role === '5deba6ae484c2fa98f58e4b0df0dd7fecfd9f7dd9a4a9f9b4739d8e1389915bd826442a81312ac3228ecc83120' && <Link to='/dashboard/admin' className='mt-5 border-2 border-red-500 hover:bg-red-500 hover:text-white text-red-500 hover:bg-transparent py-1 px-3 rounded font-semibold duration-300 shadow-sm'>Dashboard</Link> }
    </div>
  )
}

export default Hero