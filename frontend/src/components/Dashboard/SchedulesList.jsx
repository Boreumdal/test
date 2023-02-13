import React, { useMemo } from 'react'
import { useTable, useFilters } from 'react-table'
import { useSystem } from '../../context/SystemContext'
import axios from 'axios'
import { BsCheckCircleFill } from 'react-icons/bs'

const SchedulesList = () => {
  const { schedules, setNotif, setSchedules, notif } = useSystem()

  const handleDoneSchedule = id => {
    axios.patch('http://localhost:8000/dashboard/schedule', {
      id,
      status: 'Done'
    })
      .then(response => {
        setNotif(response.data)
        axios.get('http://localhost:8000/dashboard/schedule')
        .then(response => {
          setSchedules(response.data.schedules)
        })
      })
  }

  const columns = [
    {
      Header: 'Topic',
      accessor: 'req_type',
      className: 'text-left'
    },
    {
      Header: 'Name',
      className: 'text-left',
      Cell: ({row}) => (
        <>
          <span>{`${row.original.from_fname}, ${row.original.from_lname}`}</span>
        </>
      )
    },
    {
      Header: 'ID',
      accessor: 'from_studentid',
      className: 'text-left'
    },
    {
      Header: 'Branch',
      accessor: 'from_branch',
      className: 'text-left'
    },
    {
      Header: 'Appointment',
      accessor: 'appointed_date',
      className: 'text-center'
    },
    {
      Header: 'Course',
      accessor: 'course',
      className: 'text-center'
    },
    {
      Header: 'Year',
      accessor: 'year_level',
      className: 'text-center'
    },
    {
      Header: 'Status',
      accessor: 'req_status',
      className: 'text-center'
    },
    {
      Header: 'Option',
      className: 'text-center',
      Cell: ({ row }) => <>{ row.original.req_status !== 'Done' && <button onClick={() => handleDoneSchedule(row.original._id)} className='text-green-500 text-lg'><BsCheckCircleFill /></button> }</>
    }
  ]

  const columsArray = useMemo(() => columns, [])
  const dataArray = useMemo(() => schedules.map(a => a).filter(sched => sched.req_status === 'Scheduled'), [schedules])

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, setFilter } = useTable({
      columns: columsArray,
      data: dataArray
  }, useFilters )

  const inputStyle = 'block border shadow rounded w-full text-sm py-2 px-3 border-gray-300'

  return (
    <div>
      <div>
        <div className='h-full flex flex-col'>
          <h1 className='text-xl h-fit font-bold py-1'>Options</h1>
          <div className='shadow h-full rounded mt-2 grid grid-cols-2 gap-2 bg-white items-center p-4'>
            <div>
              <label className='text-sm font-medium' htmlFor="filter_by">Filter type by:</label>
              <select onChange={e => setFilter('req_type', e.target.value)} className={inputStyle} id="filter_by">
                <option value="">None</option>
                <option value="Missing ID">Missing ID</option>
                <option value="Clearance">Clearance</option>
              </select>
            </div>
            <div>
              <label className='text-sm font-medium' htmlFor="search_lastname">Search by Student ID:</label>
              <input type="text" onChange={e => setFilter('from_studentid', e.target.value)} id='search_lastname' className={inputStyle} placeholder='Student school id...' />
            </div>
          </div>
        </div>
      </div>
      <div className='py-2 mt-1'>
        <div className='flex flex-row justify-between items-center'>
            <h1 className='text-xl font-bold py-1'>Schedule List</h1>
            { notif?.msg && <p className='text-xs bg-green-500 text-white rounded-full py-1 px-3 font-medium'>{ notif.msg }</p> }
            { notif?.err && <p className='text-xs bg-red-500 text-white rounded-full py-1 px-3 font-medium'>{ notif.err }</p> }
          </div>
          
          <table className='table-layout-1 bg-white mt-2 shadow rounded overflow-hidden' {...getTableProps()}>
                <thead>
                    {
                        headerGroups.map(headerGroup => (
                            <tr { ...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map(column => (
                                <th { ...column.getHeaderProps({
                                  className: column.className
                                })}>
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
                                    <td {...cell.getCellProps({
                                      className: cell.column.className
                                    })}>
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

export default SchedulesList