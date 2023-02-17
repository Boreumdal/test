import React, { useMemo } from 'react'
import { useTable } from 'react-table'
import { useSystem } from '../../context/SystemContext'
import { requestColumns, scheduleColumns } from '../../utilities/Columns'

const Table = ({ arr, columns, message }) => {

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
                      <td colSpan={headerGroups[0].headers.length} >No {message} found</td>
                    </tr>
                  )
              }
          </tbody>
      </table>
  )
}

const MainDymmy = () => {
  const { data, requests, schedules } = useSystem()
  

  return (
    <div className='mx-6 mt-2'>
      <div className='py-2'>
        <h1 className='text-3xl font-extrabold'>Dashboard</h1>
        <p className='text-sm font-medium text-gray-400'>Welcome, {`${data?.first_name}`}</p>
      </div>
      <div className='flex flex-col gap-3'>
        <div>
          <h1 className='text-xl font-bold'>Requests List</h1>
          <Table arr={requests} columns={requestColumns} message='Requests' />
        </div>
        <div>
          <h1 className='text-xl font-bold'>Scheduled Requests List</h1>
          <Table arr={schedules} columns={scheduleColumns} message='scheduled request' />
        </div>
      </div>
    </div>
  )
}

export default MainDymmy