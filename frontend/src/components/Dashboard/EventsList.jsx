import React from 'react'
import { useSystem } from '../../context/SystemContext'
import Table from '../util/Table'

const EventsList = () => {
  const { events } = useSystem()

  const columns = [
    {
      Header: 'ID',
      accessor: '_id'
    },
    {
      Header: 'When',
      accessor: 'when'
    },
    {
      Header: 'Title',
      accessor: 'title'
    },
    {
      Header: 'Description',
      accessor: 'description'
    },
    {
      Header: 'Campus',
      accessor: 'campus'
    }
  ]

  return (
    <div>
      <h1 className='text-xl font-bold py-1'>Events List</h1>
      <Table arr={events} columns={columns} />
    </div>
  )
}

export default EventsList