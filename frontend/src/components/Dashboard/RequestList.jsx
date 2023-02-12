import React, { useEffect, useMemo } from 'react'
import { useSystem } from '../../context/SystemContext'
import { MdDelete } from 'react-icons/md'
import axios from 'axios'
import { useTable } from 'react-table'

const RequestList = () => {
  const { notif, setNotif, requests, setRequests } = useSystem()

  
// .map(a => a).sort((a, b) => a.created_at - b.created_at)
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

  const handleDelete = id => {
    axios.delete(`http://localhost:8000/dashboard/request`, { data: { _id: id } })
    .then(res => {
      setNotif(res.data)
      axios.get('http://localhost:8000/dashboard/request')
        .then(response => {
          setRequests(response.data.requests.map(a => a).sort((a, b) => a.created_at - b.created_at))
        })
    })
  }

  useEffect(() => {
    console.log('rerender')
  },[requests])

  const handleSetSchedule = id => {

  }

  const columsArray = useMemo(() => columns, [])
  const dataArray = useMemo(() => requests, [requests])

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
      columns: columsArray,
      data: dataArray
  })

  return (
    <div>
      <div className='grid grid-cols-2 gap-2 items-center h-[405px]'>
        <div className='h-full flex flex-col'>
          <div className='flex items-center justify-between'>
            <h1 className='text-xl font-bold py-1 h-fit'>Requests Info</h1>
            { notif?.msg && <p className='text-xs bg-green-500 text-white rounded-full py-1 px-2 font-medium'>{ notif.msg }</p> }
                { notif?.err && <p className='text-xs bg-red-500 text-white rounded-full py-1 px-3 font-medium'>{ notif.err }</p> }
          </div>
          <div className='shadow rounded flex flex-col justify-center bg-white h-full px-5'>
            <div>
              <div className='flex justify-between items-center'>
                <h3 className='text-xs font-bold text-gray-500 py-2'>Request Info:</h3>
                <button onClick={() => handleDelete(requests[0]._id )} className=' bg-red-500 text-white text-lg p-1 rounded h-fit'><MdDelete /></button>
              </div>
              <p className='request-info items-center pb-1'><span className='text-sm font-medium'>Concern:</span><span>{ requests[0].req_type }</span></p> 
              <p className='request-info items-center pb-1'><span className='self-start text-sm font-medium'>Message:</span> <span className='h-24 overflow-y-auto'>{ requests[0].message }</span></p>
            </div>
            <div className='mt-1'>
              <h3 className='text-xs font-bold text-gray-500 py-2'>Student Info:</h3>
              <div className='grid grid-cols-2 gap-2'>
                <div>
                  <p className='grid grid-cols-2 items-center pb-1'><span className='text-sm font-medium'>Name:</span> <span className='whitespace-nowrap text-ellipsis overflow-hidden'>{ `${requests[0].from_lname}, ${requests[0].from_fname}` }</span></p>
                  <p className='grid grid-cols-2 items-center pb-1'><span className='text-sm font-medium'>ID:</span> <span>{ requests[0].from_studentid }</span></p>
                </div>
                <div>
                  <p className='grid grid-cols-2 items-center pb-1'><span className='text-sm font-medium'>Branch:</span> <span>{ requests[0].from_branch }</span></p>
                  <p className='grid grid-cols-2 items-center pb-1'><span className='text-sm font-medium'>Status:</span> <span>{ requests[0].req_status }</span></p>
                </div>
              </div>
            </div>
            <div className='mt-1'>
              <h3 className='text-xs font-bold text-gray-500 py-2'>Set Appointment Schedule:</h3>
              <div className='grid grid-cols-2 gap-2'>
                <input type="date" id="" className={inputStyle } defaultValue={requests[0].pref_date} />
                <button className='bg-green-500 text-sm font-medium text-white rounded'>Set Schedule</button>
              </div>
            </div>
          </div>
        </div>

        <div className='grid grid-rows-2 h-full'>

          <div className='h-full flex flex-col'>
            <h1 className='text-xl h-fit font-bold py-1'>Requests History</h1>
            <div className='shadow rounded h-full bg-white p-4'>
              
            </div>
          </div>

          <div className='h-full flex flex-col'>
            <h1 className='text-xl h-fit font-bold py-1'>Options</h1>
            <div className='shadow h-full rounded flex flex-col justify-center gap-2 bg-white p-4'>
              <div>
                <label className='text-sm font-medium' htmlFor="filter_by">Filter type by:</label>
                <select className={inputStyle} id="filter_by">
                  <option value="Missing ID">Missing ID</option>
                  <option value="Clearance">Clearance</option>
                </select>
              </div>
              <div>
                <label className='text-sm font-medium' htmlFor="search_lastname">Search by last name:</label>
                <input type="text" id='search_lastname' className={inputStyle} placeholder='Search by last name...' />
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className='py-2'>
        <h1 className='text-xl font-bold py-1'>Requests Table</h1>
        <table className='table-layout-1 bg-white mt-2 shadow rounded overflow-hidden' {...getTableProps()}>
            <thead>
                {
                    headerGroups.map(headerGroup => (
                        <tr { ...headerGroup.getHeaderGroupProps()}>
                        {
                            headerGroup.headers.map(column => (
                            <th { ...column.getHeaderProps()}>
                                { column.render('Header')}
                            </th>
                            ))
                        }
                        </tr>
                    ))
                }
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map(row => {
                        prepareRow(row)
                        return (
                        <tr { ...row.getRowProps()}>
                            {
                            row.cells.map(cell => (
                                <td { ...cell.getCellProps()}>
                                {
                                    cell.render('Cell')
                                }
                                </td>
                            ))
                            }
                        </tr>
                        )
                    })
                }
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default RequestList