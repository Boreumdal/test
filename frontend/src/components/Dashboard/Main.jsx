import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import StudentsList from './StudentsList'
import EventsList from './EventsList'
import RequestList from './RequestList'
import SchedulesList from './SchedulesList'
import { useSystem } from '../../context/SystemContext'

const Main = ({selectValue, searchValue}) => {
    const { students, events, requests, schedules } = useSystem()
  return (
    <div className='mx-6 mt-2'>
        <h1 className='text-3xl font-extrabold py-2'>Dashboard</h1>
        <div className='w-full grid grid-cols-4 py-2 gap-2'>
            <Link to='/dashboard/admin' className='duration-200 w-full bg-1 shadow-sm rounded-md flex flex-col pl-8 justify-center h-[130px]'>
                <p className='font-bold text-2xl'>{ students ? students.length : 'Err: Can\'t calculate length' }</p>
                <p className='text-sm '>Students</p>
            </Link>
            <Link to='/dashboard/admin/event' className='duration-200 w-full bg-2 shadow-sm rounded-md flex flex-col pl-8 justify-center h-[130px]'>
                <p className='font-bold text-2xl'>{ events ? events.length : 'Err: Can\'t calculate length' }</p>
                <p className='text-sm '>Events</p>
            </Link>
            <Link to='/dashboard/admin/request' className='duration-200 w-full bg-3 shadow-sm rounded-md flex flex-col pl-8 justify-center h-[130px]'>
                <p className='font-bold text-2xl'>{ requests.length }</p>
                <p className='text-sm '>Request</p>
            </Link>
            <Link to='/dashboard/admin/schedule' className='duration-200 w-full bg-4 shadow-sm rounded-md flex flex-col pl-8 justify-center h-[130px]'>
                <p className='font-bold text-2xl'>{ schedules.length > 0 ? schedules.filter(sched => sched.req_status === 'Scheduled').length : null }</p>
                <p className='text-sm '>Scheduled</p>
            </Link>
        </div>

        <div>
            <Routes>
                <Route path='/'>
                    <Route index element={<StudentsList selectValue={selectValue} searchValue={searchValue} />} />
                    <Route path='event' element={<EventsList selectValue={selectValue} searchValue={searchValue} />} />
                    <Route path='request' element={<RequestList />} />
                    <Route path='schedule' element={<SchedulesList selectValue={selectValue} searchValue={searchValue} />} />
                </Route>
            </Routes>
        </div>
    </div>
  )
}

export default Main