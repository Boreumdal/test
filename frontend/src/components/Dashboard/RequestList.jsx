import React, { useState } from 'react'
import { useSystem } from '../../context/SystemContext'
import Table from '../util/Table'

const RequestList = () => {
  const { requests } = useSystem()
  const sorted_request = requests.map(a => a).sort((a, b) => a.created_at - b.created_at)
  
  const [pref, setPref] = useState(sorted_request[0].pref_date)

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

  const inputStyle = 'block border shadow rounded w-full text-sm py-2 px-3 border-gray-300'

  return (
    <div>
      <div className='grid grid-cols-2 gap-2 items-center h-[405px]'>
        <div className='h-full flex flex-col'>
          <h1 className='text-xl font-bold py-1 h-fit'>Requests Info</h1>
          <div className='shadow rounded flex flex-col justify-center bg-white h-full px-5'>
            <div>
              <h3 className='text-xs font-bold text-gray-500 py-2'>Request Info:</h3>
              <p className='request-info items-center pb-1'><span className='text-sm font-medium'>Concern:</span><span>{ sorted_request[0].req_type }</span></p> 
              <p className='request-info items-center pb-1'><span className='self-start text-sm font-medium'>Message:</span> <span className='h-24 overflow-y-auto'>{ sorted_request[0].message }</span></p>
            </div>
            <div className='mt-1'>
              <h3 className='text-xs font-bold text-gray-500 py-2'>Student Info:</h3>
              <div className='grid grid-cols-2 gap-2'>
                <div>
                  <p className='grid grid-cols-2 items-center pb-1'><span className='text-sm font-medium'>Name:</span> <span>{ `${sorted_request[0].from_lname}, ${sorted_request[0].from_fname}` }</span></p>
                  <p className='grid grid-cols-2 items-center pb-1'><span className='text-sm font-medium'>ID:</span> <span>{ sorted_request[0].from_studentid }</span></p>
                </div>
                <div>
                  <p className='grid grid-cols-2 items-center pb-1'><span className='text-sm font-medium'>Branch:</span> <span>{ sorted_request[0].from_branch }</span></p>
                  <p className='grid grid-cols-2 items-center pb-1'><span className='text-sm font-medium'>Status:</span> <span>{ sorted_request[0].req_status }</span></p>
                </div>
              </div>
            </div>
            <div className='mt-1'>
              <h3 className='text-xs font-bold text-gray-500 py-2'>Set Appointment Schedule:</h3>
              <div className='grid grid-cols-2 gap-2'>
                <input type="date" id="" className={inputStyle } value={pref} />
                <button className='border bg-red-500 text-sm font-medium text-white rounded'>Set Schedule</button>
              </div>
            </div>
          </div>
        </div>

        <div className='grid grid-rows-2 h-full'>

          <div className='h-full border flex flex-col'>
            <h1 className='text-xl h-fit font-bold py-1'>Requests History</h1>
            <div className='shadow rounded h-full bg-white p-4'>
              
            </div>
          </div>

          <div className='h-full border flex flex-col'>
            <h1 className='text-xl h-fit font-bold py-1'>Option</h1>
            <div className='shadow h-full rounded flex flex-col justify-center gap-2 bg-white p-4'>
              <div>
                <label htmlFor="filter_by">Filter type by:</label>
                <select className={inputStyle} id="filter_by">
                  <option value="Missing ID">Missing ID</option>
                  <option value="Clearance">Clearance</option>
                </select>
              </div>
              <div>
                <label htmlFor="search_lastname">Search by last name:</label>
                <input type="text" id='search_lastname' className={inputStyle} placeholder='Search by last name...' />
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className='py-2'>
        <h1 className='text-xl font-bold py-1'>Requests Table</h1>
        <Table arr={sorted_request} columns={columns} />
      </div>
    </div>
  )
}

export default RequestList