import React, { useEffect, useMemo } from 'react'
import { useSystem } from '../../context/SystemContext'
import { useFilters, useTable } from 'react-table'
import { useNavigate } from 'react-router-dom'
import { FaEdit } from 'react-icons/fa'

const StudentsList = ({selectValue, searchValue}) => {
  const { students } = useSystem()
  const navigate = useNavigate()

  const columns = [
    {
      Header: 'ID',
      accessor: '_id',
      className: 'text-left'
    },
    {
      Header: 'First Name',
      accessor: 'first_name',
      className: 'text-left'
    },
    {
      Header: 'Last Name',
      accessor: 'last_name',
      className: 'text-left'
    },
    {
      Header: 'Branch',
      accessor: 'branch',
      className: 'text-left'
    },
    {
      Header: 'Gender',
      accessor: 'gender',
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
      Header: 'Action',
      className: 'text-center',
      Cell: ({ row }) => (
        <div className='flex justify-center items-center'>
          <button className='text-xl text-orange-400' onClick={() => handleEditStudent(row.original)}><FaEdit /></button>
        </div>
      )
    }
  ]

  const handleEditStudent = info => {
    navigate('/dashboard/edit/student', { state: info})
  }

  const columsArray = useMemo(() => columns, [])
  const dataArray = useMemo(() => students, [students])

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, setFilter } = useTable({
      columns: columsArray,
      data: dataArray
  }, useFilters)

  useEffect(() => {
    if (selectValue) setFilter('branch', selectValue)
    console.log(selectValue)
  }, [selectValue])
  useEffect(() => {
    if (searchValue) setFilter('last_name', searchValue)
    
  }, [searchValue])
  
  const inputStyle = 'block border shadow rounded w-full text-sm py-2 px-3 border-gray-300'

  return (
    <div>
      {searchValue}
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

export default StudentsList