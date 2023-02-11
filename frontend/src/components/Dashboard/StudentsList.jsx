import React from 'react'
import { useSystem } from '../../context/SystemContext'
import Table from '../util/Table'

const StudentsList = () => {
  const { students } = useSystem()

  const columns = [
    {
      Header: 'ID',
      accessor: '_id'
    },
    {
      Header: 'First Name',
      accessor: 'first_name'
    },
    {
      Header: 'Last Name',
      accessor: 'last_name'
    },
    {
      Header: 'Gender',
      accessor: 'gender'
    },
    {
      Header: 'Course',
      accessor: 'course'
    },
    {
      Header: 'Branch',
      accessor: 'branch'
    },
    {
      Header: 'Year',
      accessor: 'year_level'
    }
  ]
  
  return (
    <div>
      <h1 className='text-xl font-bold py-1'>Students List</h1>
          
      <Table arr={students} columns={columns} />
    </div>
  )
}

export default StudentsList