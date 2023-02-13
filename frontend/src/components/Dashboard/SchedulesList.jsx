import React from 'react'
import { useSystem } from '../../context/SystemContext'
import Table from '../util/Table'
import axios from 'axios'

const SchedulesList = () => {
  const { schedules, setNotif } = useSystem()

  const handleDoneSchedule = id => {
    axios.patch('http://localhost:8000/dashboard/schedule', {
      id,
      status: 'Done'
    })
      .then(response => {
        setNotif(response.data)
      })
  }

  const columns = [
    {
      Header: 'Topic',
      accessor: 'req_type'
    },
    {
      Header: 'Appointment',
      accessor: 'appointed_date'
    },
    {
      Header: 'Name',
      Cell: ({row}) => (
        <>
          <span className="item title">{`${row.original.from_fname}, ${row.original.from_lname}`}</span>
        </>
      )
    },
    {
      Header: 'Student ID',
      accessor: 'from_studentid'
    },
    {
      Header: 'Branch',
      accessor: 'from_branch'
    },
    {
      Header: 'Course',
      accessor: 'course'
    },
    {
      Header: 'Year',
      accessor: 'year_level'
    },
    {
      Header: 'Created',
      accessor: 'created_at'
    },
    {
      Header: 'Status',
      accessor: 'req_status'
    },
    {
      Header: 'Option',
      Cell: ({ row }) => (
        <>
          {
            row.original.req_status !== 'Done' && <button onClick={() => handleDoneSchedule(row.original._id)} className='ml-2 border text-xs p-1'>Done</button>
          }
        </>
        
        
      )
    }
  ]

  return (
    <div>
      <h1 className='text-xl font-bold py-1'>Events List</h1>
      <Table arr={schedules} columns={columns} />
    </div>
  )
}

export default SchedulesList