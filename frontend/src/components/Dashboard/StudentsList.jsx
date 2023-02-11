import React, { useMemo} from 'react'
import { useSystem } from '../../context/SystemContext'
import { useTable } from 'react-table'

const StudentsList = () => {
  const { students } = useSystem()

  const columns = [
    {
      Header: 'ID',
      accessor: '_id'
    },
    {
      Header: 'First Name',
      accessor: 'first_name'
    },
    {
      Header: 'Last Name',
      accessor: 'last_name'
    },
    {
      Header: 'Gender',
      accessor: 'gender'
    },
    {
      Header: 'Course',
      accessor: 'course'
    },
    {
      Header: 'Branch',
      accessor: 'branch'
    },
    {
      Header: 'Year',
      accessor: 'year_level'
    }
  ]
  
  const columsArray = useMemo(() => columns, [])
  const studentsArray = useMemo(() => students, [])

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns: columsArray,
    data: studentsArray
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

export default StudentsList