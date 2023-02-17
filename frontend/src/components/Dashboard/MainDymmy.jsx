import React, { useMemo } from 'react'
import { useTable } from 'react-table'
import { useSystem } from '../../context/SystemContext'

const Table = ({ arr, columns }) => {

  const columsArray = useMemo(() => [...columns], [])
  const dataArray = useMemo(() => [...arr], [])

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
      columns: columsArray,
      data: dataArray
  })

  return (
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
                rows.length > 0 ? rows.map(row => {
                      prepareRow(row)
                      return (
                      <tr { ...row.getRowProps()}>
                          {
                          row.cells.map(cell => (
                              <td { ...cell.getCellProps({
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
                  }) : (
                    <tr className='text-center'>
                      <td colSpan={headerGroups[0].headers.length} >No data found</td>
                    </tr>
                  )
              }
          </tbody>
      </table>
  )
}

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
        <div>
          <h1 className='text-xl font-bold'>Requests List</h1>
          <Table arr={requests} columns={requestColumns} />
        </div>
        <div>
          <h1 className='text-xl font-bold'>Scheduled Requests List</h1>
          <Table arr={schedules} columns={scheduleColumns} />
        </div>
      </div>
    </div>
  )
}

export default MainDymmy