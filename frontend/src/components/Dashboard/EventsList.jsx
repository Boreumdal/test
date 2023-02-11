import React, { useMemo } from 'react'
import { useSystem } from '../../context/SystemContext'
import { useTable } from 'react-table'

const EventsList = () => {
  const { events } = useSystem()

  const columns = [
    {
      Header: 'ID',
      accessor: '_id'
    },
    {
      Header: 'When',
      accessor: 'when'
    },
    {
      Header: 'Title',
      accessor: 'title'
    },
    {
      Header: 'Description',
      accessor: 'description'
    },
    {
      Header: 'Campus',
      accessor: 'campus'
    }
  ]

  const columnsArray = useMemo(() => columns, [])
  const eventsArray = useMemo(() => events, [])

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns: columnsArray,
    data: eventsArray
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

export default EventsList