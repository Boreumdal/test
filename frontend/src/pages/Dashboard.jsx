import React, { useEffect } from 'react'
import { useSystem } from '../context/SystemContext'
import { NavLink, Route, Routes } from 'react-router-dom'
import { BsFillHouseFill, BsPersonPlusFill, BsFillCalendarEventFill, BsPersonFill } from "react-icons/bs"
import AddEvent from '../components/Dashboard/AddEvent'
import Main from '../components/Dashboard/Main'
import AddStudent from '../components/Dashboard/AddStudent'
import AddRequest from '../components/Dashboard/AddRequest'
import Profile from '../components/Dashboard/Profile'
import MainDymmy from '../components/Dashboard/MainDymmy'
import EditStudent from '../components/Dashboard/EditStudent'

const Dashboard = () => {
  const { data } = useSystem()
  const navigationLinkStyle = ' text-sm mt-1 py-3 px-4 font-medium flex items-center gap-3'

  return data.role === '49afe28d956804de0fde8f7bcabd749f495193c53fc5d802355c96ad6f3f46c37e72d18b9830d61de80c7b01f9' 
    ? (
      <div className='h-[92vh] flex flex-row'>
        <div className='shadow w-3/12 bg-white'>
          <div className='flex flex-row items-center shadow gap-2 px-2 py-3 bg-blue-500 text-white'>
            <img src={ data?.profile} className='shadow w-[70px] h-[70px] rounded-full object-cover object-center ' alt="" />
            <div>
              <p className='text-lg font-bold'>{ `${data?.last_name}, ${data?.first_name}` }</p>
              <p className='text-sm'>Student</p>
            </div>
          </div>

          <div className='mt-3 mx-2'>
            <h1 className='text-xs font-bold text-gray-500 py-2'>Navigation</h1>
            <div className='flex flex-col'>
              <NavLink to='/dashboard/student' className={({isActive}) => (isActive ? 'text-blue-500' : '') + navigationLinkStyle}>
                <span className='text-lg'><BsFillHouseFill /></span>
                <span>Home</span>
              </NavLink>
              <NavLink to='/dashboard/request' className={({isActive}) => (isActive ? 'text-blue-500' : '') + navigationLinkStyle}>
                <span className='text-lg'><BsPersonPlusFill /></span>
                <span>Send Request</span>
              </NavLink>
              <NavLink to='/dashboard/profile' className={({isActive}) => (isActive ? 'text-blue-500' : '') + navigationLinkStyle}>
                <span className='text-lg'><BsPersonFill /></span>
                <span>Profile</span>
              </NavLink>
            </div>
          </div>
        </div>
        <div className='border w-9/12 overflow-y-auto pb-6'>
          <Routes>
            <Route path='/'>
              <Route path='student' element={<MainDymmy />} />
              <Route path='request' element={<AddRequest  />} />
              <Route path='profile' element={<Profile />} />
            </Route>
          </Routes>
        </div>
      </div>
    ) : (
      <div className='h-[92vh] flex flex-row'>
        <div className='shadow w-3/12 bg-white'>
          <div className='flex items-center shadow gap-2 px-2 py-3 bg-blue-500 text-white'>
            <img src={ data?.profile_pic} className='shadow w-[70px] h-[70px] rounded-full object-cover object-center' alt="" />
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
        <div className='border w-9/12 overflow-y-auto pb-6'>
          <Routes>
            <Route path='/'>
              <Route path='admin/*' element={<Main />} />
              <Route path='add/student' element={<AddStudent />} />
              <Route path='edit/student' element={<EditStudent />} />
              <Route path='add/event' element={<AddEvent />} />
            </Route>
          </Routes>
        </div>
      </div>
    )
}

export default Dashboard