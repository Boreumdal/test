import React, { useMemo } from 'react'
import { useTable, useFilters } from 'react-table'
import { useSystem } from '../../context/SystemContext'

const EventsList = () => {
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

  return (
    <div>
      <div>
        <div className='h-full flex flex-col'>
          <h1 className='text-xl h-fit font-bold py-1'>Options</h1>
          <div className='shadow h-full rounded mt-2 grid grid-cols-2 gap-2 bg-white items-center p-4'>
            <div>
              <label className='text-sm font-medium' htmlFor="filter_by">Filter type by:</label>
              <select onChange={e => setFilter('campus', e.target.value)} className={inputStyle} id="filter_by">
                <option value="">None</option>
                <option value="Main">Cainta</option>
                <option value="Taytay">Taytay</option>
              </select>
            </div>
            <div>
              <label className='text-sm font-medium' htmlFor="search_title">Search by Event Title:</label>
              <input type="text" onChange={e => setFilter('title', e.target.value)} id='search_title' className={inputStyle} placeholder='Search by event title...' />
            </div>
          </div>
        </div>
      </div>
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