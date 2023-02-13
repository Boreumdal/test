import React, { useMemo } from 'react'
import { useTable } from 'react-table'
import { useSystem } from '../../context/SystemContext'
import axios from 'axios'
import { BsCheckCircleFill } from 'react-icons/bs'

const SchedulesList = () => {
  const { schedules, setNotif, setSchedules } = useSystem()

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
            row.original.req_status !== 'Done' && <button onClick={() => handleDoneSchedule(row.original._id)} className='ml-2 text-green-500 text-xl'><BsCheckCircleFill /></button>
          }
        </>
      )
    }
  ]

  const columsArray = useMemo(() => columns, [])
  const dataArray = useMemo(() => schedules.map(a => a).filter(sched => sched.req_status === 'Scheduled'), [schedules])

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
      columns: columsArray,
      data: dataArray
  })

  return (
    <div>
      <h1 className='text-xl font-bold py-1'>Events List</h1>
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
  )
}

export default SchedulesList