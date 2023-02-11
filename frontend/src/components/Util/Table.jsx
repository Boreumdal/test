import React, { useMemo } from 'react'
import { useTable } from 'react-table'

const Table = ({ arr, columns }) => {

    const columsArray = useMemo(() => columns, [])
    const dataArray = useMemo(() => arr, [])

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
    )
}

export default Table