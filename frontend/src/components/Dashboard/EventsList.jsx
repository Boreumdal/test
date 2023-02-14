import React, { useMemo, useEffect } from 'react'
import { useTable, useFilters } from 'react-table'
import { useSystem } from '../../context/SystemContext'

const EventsList = ({selectValue, searchValue}) => {
  const { events } = useSystem()

  const columns = [
    {
      Header: 'ID',
      accessor: '_id',
      className: 'text-left'
    },
    {
      Header: 'Title',
      accessor: 'title',
      className: 'text-left'
    },
    {
      Header: 'Description',
      accessor: 'description',
      className: 'text-left'
    },
    {
      Header: 'Campus',
      accessor: 'campus',
      className: 'text-left'
    },
    {
      Header: 'When',
      accessor: 'when',
      className: 'text-center'
    }
  ]

  const columsArray = useMemo(() => columns, [])
  const dataArray = useMemo(() => events, [])

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, setFilter } = useTable({
      columns: columsArray,
      data: dataArray
  }, useFilters)

  const inputStyle = 'block border shadow rounded w-full text-sm py-2 px-3 border-gray-300'

  useEffect(() => {
    if (selectValue) setFilter('campus', selectValue)
  }, [selectValue])
  
  useEffect(() => {
    if (searchValue) setFilter('title', searchValue)
    
  }, [searchValue])

  return (
    <div>
      
      <div className='py-2 mt-1'>
        <h1 className='text-xl font-bold py-1'>Events List</h1>
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
                      })
                  }
              </tbody>
          </table>
      </div>
    </div>
  )
}

export default EventsList