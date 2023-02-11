import React from 'react'
import { useSystem } from '../../context/SystemContext'
import Table from '../util/Table'

const RequestList = () => {
  const { requests } = useSystem()
  
  const sorted = requests.map(a => a).sort((a, b) => a.created_at - b.created_at)
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

  ]

  return (
    <div>
      <h1 className='text-xl font-bold py-1'>Students List</h1>
      <Table arr={sorted} columns={columns} />
    </div>
  )
}

export default RequestList