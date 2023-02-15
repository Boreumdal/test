import React from 'react'
import Table from '../util/Table'
import { useSystem } from '../../context/SystemContext'

const MainDymmy = () => {
  const { data, requests, schedules } = useSystem()
  const requestColumns = [
    {
      Header: 'ID',
      accessor: '_id'
    },
    {
      Header: 'Topic',
      accessor: 'req_type'
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
      Header: 'Preferred Date',
      accessor: 'pref_date'
    },
    {
      Header: 'Status',
      accessor: 'req_status'
    }
  ]

  const scheduleColumns = [
    {
      Header: 'ID',
      accessor: '_id'
    },
    {
      Header: 'Topic',
      accessor: 'req_type'
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
      Header: 'Appointed Date',
      accessor: 'pref_date'
    },
    {
      Header: 'Status',
      accessor: 'req_status'
    }
  ]

  return (
    <div className='mx-6 mt-2'>
      <div className='py-2'>
        <h1 className='text-3xl font-extrabold'>Dashboard</h1>
        <p className='text-sm font-medium text-gray-400'>Welcome, {`${data?.first_name}`}</p>
      </div>
      <div className='flex flex-col gap-3'>
        <div className='border'>
          <h1 className='text-xl font-bold'>Requests List</h1>
          <Table arr={requests} columns={requestColumns} />          
        </div>
        <div className='border'>
          <h1 className='text-xl font-bold'>Scheduled Requests List</h1>
          <Table arr={schedules} columns={scheduleColumns} />
        </div>
      </div>
    </div>
  )
}

export default MainDymmy