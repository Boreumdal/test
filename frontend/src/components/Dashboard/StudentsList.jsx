import React, { useEffect, useMemo } from 'react'
import { useSystem } from '../../context/SystemContext'
import { useFilters, useTable } from 'react-table'
import { useNavigate, useLocation } from 'react-router-dom'
import { studentsListColumns } from '../../utilities/Columns'

const StudentsList = () => {
  const { students } = useSystem()
  const navigate = useNavigate()

  const handleEditStudent = info => {
    navigate('/dashboard/edit/student', { state: info})
  }

  const columsArray = useMemo(() => studentsListColumns, [])
  const dataArray = useMemo(() => students, [students])

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
              <label className='text-sm font-medium' htmlFor="filter_by">Branch filter:</label>
              <select onChange={e => setFilter('branch', e.target.value)} className={inputStyle} id="filter_by">
                <option value="">None</option>
                <option value="Taytay">Taytay</option>
                <option value="Cainta">Cainta</option>
              </select>
            </div>
            <div>
              <label className='text-sm font-medium' htmlFor="search_lastname">Search by student last name:</label>
              <input type="text" onChange={e => setFilter('last_name', e.target.value)} id='search_lastname' className={inputStyle} placeholder='Student last name...' />
            </div>
          </div>
        </div>
      </div>

      <div className='py-2 mt-1'>
        <h1 className='text-xl font-bold py-1'>Students List</h1>
            
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
                          <td colSpan={headerGroups[0].headers.length}>No students in database found</td>
                        </tr>
                      )
                  }
              </tbody>
          </table>
      </div>
    </div>
  )
}

export default StudentsList