import React from 'react'
import { useSystem } from '../context/SystemContext'

const Dashboard = () => {
  const { data } = useSystem()
  return (
    <div className='h-[92vh] flex flex-row'>
      <div className='border w-3/12'>

      </div>
      <div className='border w-9/12'>

      </div>
    </div>
  )
}

export default Dashboard