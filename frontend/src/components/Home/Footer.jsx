import React from 'react'
import { FaFacebook, FaTwitter, FaGithub, FaLocationArrow, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-white'>
      <div className='flex items-start gap-2 justify-center pt-7 pb-3'>
        <div className='w-3/12 text-sm'>
          <img src="/src/img/logo.png" className='w-[120px]' alt="" />
          <div className='flex items-center gap-3 mt-1'>
            <span className='text-lg'><FaLocationArrow /></span>
            <p>ICCT Building. V.V. Soliven Ave.II, Cainta, Rizal<br/>Philippines 1900</p>
          </div>
          <div className='flex items-center gap-3 mt-2'>
            <span className='text-lg'><FaEnvelope /></span>
            <p>info@icct.edu.ph</p>
          </div>
        </div>
        <div className='w-2/12'>
          <h3 className='font-bold'>Website Map</h3>
          <div className='flex flex-col'>
            <a className='mt-2'>Top</a>
            <a className='mt-2' href="#">Latest events</a>
          </div>
        </div>
        <div className='w-2/12'>
          <h3 className='font-bold'>Resources</h3>
          <div className='flex flex-col'>
            <a className='mt-2' href="#">Git</a>
            <a className='mt-2' href="#">Privacy Policy</a>
            <a className='mt-2' href="#">Official Main Website</a>
          </div>
        </div>
      </div>
      <div className='w-2/3 mx-auto flex flex-col items-center py-3'>
        <div className='flex gap-3'>
          <a href='#' className='text-3xl'><FaFacebook /></a>
          <a href='#' className='text-3xl'><FaTwitter /></a>
          <a href='#' className='text-3xl'><FaGithub /></a>
        </div>
        <p className='text-sm font-medium py-1'>SCMS Copyright</p>
      </div>
    </footer>
  )
}

export default Footer