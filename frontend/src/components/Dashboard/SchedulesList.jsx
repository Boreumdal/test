import React from 'react'
import { useSystem } from '../../context/SystemContext'
import Table from '../util/Table'

const SchedulesList = () => {
  const { schedules } = useSystem()

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