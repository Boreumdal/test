import React from 'react'
import { Link } from 'react-router-dom'
import { useSystem } from '../../context/SystemContext'

const Hero = () => {
  const { token } = useSystem()
  return (
    <div className='bg-white h-[80vh] border flex flex-col items-center justify-center'>
        <h1 className='text-5xl font-bold py-1'>Student-Centric Management System</h1>
        <p className='py-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores impedit porro esse eius.</p>
        { !token && <Link to='/login' className='mt-5 border-2 border-green-500 bg-green-500 text-white hover:text-green-500 hover:bg-transparent py-1 px-3 rounded font-semibold duration-300 shadow-sm'>Sign me in</Link> }
        { token && <Link to='/dashboard/home' className='mt-5 border-2 border-green-500 hover:bg-green-500 hover:text-white text-green-500 hover:bg-transparent py-1 px-3 rounded font-semibold duration-300 shadow-sm'>Dashboard</Link> }
    </div>
  )
}

export default Hero