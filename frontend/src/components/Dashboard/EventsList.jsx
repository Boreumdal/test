import React, { useMemo } from 'react'
import { useTable, useFilters } from 'react-table'
import { useSystem } from '../../context/SystemContext'
import { eventsColumns } from '../../utilities/Columns'

const EventsList = () => {
  const { events } = useSystem()

  const columsArray = useMemo(() => eventsColumns, [])
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
              <label className='text-sm font-medium' htmlFor="filter_by">Filter by campus:</label>
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
                          <td colSpan={headerGroups[0].headers.length}>No data found</td>
                        </tr>
                      )
                  }
              </tbody>
          </table>
      </div>
    </div>
  )
}

export default EventsList