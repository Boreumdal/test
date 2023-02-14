import React, { useMemo } from 'react'
import { useSystem } from '../../context/SystemContext'
import { useTable } from 'react-table'
import { useNavigate } from 'react-router-dom'

const StudentsList = () => {
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
      Cell: ({ row }) => <button className='shadow rounded px-2 bg-orange-500 text-sm text-white' onClick={() => handleEditStudent(row.original)}>Edit</button>
    }
  ]

  const handleEditStudent = info => {
    navigate('/dashboard/edit/student', { state: info})
  }

  const columsArray = useMemo(() => columns, [])
  const dataArray = useMemo(() => students, [students])

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
      columns: columsArray,
      data: dataArray
  })
  
  return (
    <div>
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
  )
}

export default StudentsList