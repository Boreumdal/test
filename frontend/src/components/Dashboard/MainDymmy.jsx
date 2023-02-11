import React from 'react'
import Table from '../util/Table'
import { useSystem } from '../../context/SystemContext'

const MainDymmy = () => {
  const { data, requests } = useSystem()
  const columns = [
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
      Header: 'Preferred Date',
      accessor: 'pref_date'
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
      Header: 'Status',
      accessor: 'req_status'
    },

  ]

  return (
    <div className='mx-6 mt-2'>
      <div className='py-2'>
        <h1 className='text-3xl font-extrabold'>Dashboard</h1>
        <p className='text-sm font-medium text-gray-400'>Welcome, {`${data?.first_name}`}</p>
      </div>
      <div>
        <h1 className='text-xl font-bold'>Requests List</h1>
        <Table arr={requests} columns={columns} />
      </div>
    </div>
  )
}

export default MainDymmy