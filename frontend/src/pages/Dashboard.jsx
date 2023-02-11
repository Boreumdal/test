import React, { useEffect } from 'react'
import { useSystem } from '../context/SystemContext'
import { NavLink, Route, Routes } from 'react-router-dom'
import { BsFillHouseFill, BsPersonPlusFill, BsFillCalendarEventFill } from "react-icons/bs"
import AddEvent from '../components/Dashboard/AddEvent'
import Main from '../components/Dashboard/Main'
import AddStudent from '../components/Dashboard/AddStudent'

const Dashboard = () => {
  const { data } = useSystem()
  const navigationLinkStyle = ' text-sm mt-1 py-3 px-4 font-medium flex items-center gap-3'

  return (
    <div className='h-[92vh] flex flex-row'>
      <div className='shadow w-3/12 bg-white'>
        <div className='flex items-center shadow gap-2 px-2 py-3 bg-blue-500 text-white'>
          <img src={ data?.profile_pic} className='w-[25%]' alt="" />
          <div>
            <p className='text-lg font-bold'>{ data?.name }</p>
            <p className='text-sm'>Admin</p>
          </div>
        </div>

        <div className='mt-3 mx-2'>
          <h1 className='text-xs font-bold text-gray-500 py-2'>Navigation</h1>
          <div className='flex flex-col'>
            <NavLink to='/dashboard/admin' className={({isActive}) => (isActive ? 'text-blue-500' : '') + navigationLinkStyle}>
              <span className='text-lg'><BsFillHouseFill /></span>
              <span>Home</span>
            </NavLink>
            <NavLink to='/dashboard/add/student' className={({isActive}) => (isActive ? 'text-blue-500' : '') + navigationLinkStyle}>
              <span className='text-lg'><BsPersonPlusFill /></span>
              <span>Add Student</span>
            </NavLink>
            <NavLink to='/dashboard/add/event' className={({isActive}) => (isActive ? 'text-blue-500' : '') + navigationLinkStyle}>
              <span className='text-lg'><BsFillCalendarEventFill /></span>
              <span>Add Event</span>
            </NavLink>
          </div>
        </div>
      </div>
      <div className='border w-9/12 overflow-y-auto'>
        <Routes>
          <Route path='/'>
            <Route path='admin/*' element={<Main />} />
            <Route path='add/student' element={<AddStudent  />} />
            <Route path='add/event' element={<AddEvent />} />
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default Dashboard