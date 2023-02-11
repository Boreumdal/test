import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import StudentsList from './StudentsList'
import EventsList from './EventsList'
import RequestList from './RequestList'
import SchedulesList from './SchedulesList'
import { useSystem } from '../../context/SystemContext'

const Main = () => {
    const { students, events } = useSystem()
  return (
    <div className='mx-6 mt-2'>
        <h1 className='text-3xl font-extrabold py-2'>Dashboard</h1>
        <div className='flex gap-2 py-2'>
            <div className='w-2/3 flex flex-col gap-2'>
                <div className='flex gap-2'>
                    <Link to='/dashboard/home' className='duration-200 w-1/2 bg-1 shadow rounded-md flex flex-col pl-8 justify-center h-[130px]'>
                        <p className='font-bold text-2xl'>{ students ? students.length : 'Err: Can\'t calculate length' }</p>
                        <p className='text-sm '>Students</p>
                    </Link>
                    <Link to='/dashboard/home/event' className='duration-200 w-1/2 bg-2 shadow rounded-md flex flex-col pl-8 justify-center h-[130px]'>
                        <p className='font-bold text-2xl'>{ events ? events.length : 'Err: Can\'t calculate length' }</p>
                        <p className='text-sm '>Events</p>
                    </Link>
                </div>
                <div className='flex gap-2'>
                    <Link to='/dashboard/home/request' className='duration-200 w-1/2 bg-3 shadow rounded-md flex flex-col pl-8 justify-center h-[130px]'>
                        <p className='font-bold text-2xl'>1000</p>
                        <p className='text-sm '>Request dummy</p>
                    </Link>
                    <Link to='/dashboard/home/schedule' className='duration-200 w-1/2 bg-4 shadow rounded-md flex flex-col pl-8 justify-center h-[130px]'>
                        <p className='font-bold text-2xl'>989898</p>
                        <p className='text-sm '>Scheduled</p>
                    </Link>
                </div>
            </div>
            <div className='w-1/3 px-2'>
                <p>History...</p>
            </div>
        </div>

        <div>
            <Routes>
                <Route path='/'>
                    <Route index element={<StudentsList />} />
                    <Route path='event' element={<EventsList />} />
                    <Route path='request' element={<RequestList />} />
                    <Route path='schedule' element={<SchedulesList />} />
                </Route>
            </Routes>
        </div>
    </div>
  )
}

export default Main