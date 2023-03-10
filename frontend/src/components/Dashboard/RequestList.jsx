import React, { useRef, useMemo, useEffect } from 'react'
import { useSystem } from '../../context/SystemContext'
import { MdDelete } from 'react-icons/md'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import axios from 'axios'
import { useFilters, useTable, usePagination } from 'react-table'
import { requestsColumns } from '../../utilities/Columns'

const RequestList = () => {
  const { notif, setNotif, requests, setRequests, setSchedules } = useSystem()
  const historyInfo = useRef([])
  const appoint_date = useRef(null)

  const inputStyle = 'block border shadow rounded w-full text-sm py-2 px-3 border-gray-300'

  const handleDelete = (id, gauge) => {
    axios.delete(import.meta.env.VITE_SERVER_URL + `/dashboard/request`, { data: { _id: id } })
    .then(res => {
      if (gauge === 2) setNotif(res.data)
      axios.get(import.meta.env.VITE_SERVER_URL + '/dashboard/request')
        .then(response => {
          if (historyInfo.current.length > 1){
            historyInfo.current = [historyInfo.current[1], {...requests[0], gauge}]
          }
          if (historyInfo.current.length < 2){
            historyInfo.current = [...historyInfo.current, {...requests[0], gauge}]
          }
          
          setRequests(response.data.requests.map(a => a).sort((a, b) => a.created_at - b.created_at))
        })
      axios.get(import.meta.env.VITE_SERVER_URL + '/dashboard/schedule')
        .then(response => {
          setSchedules(response.data.schedules)
        })
    })
  }

  const handleSetSchedule = details => {
    axios.post(import.meta.env.VITE_SERVER_URL + '/dashboard/schedule', {
      ...details,
      req_status: 'Scheduled',
      appointed_date: appoint_date.current.value
    })
      .then(response => {
        setNotif(response.data)
        handleDelete(details._id, 1)
      })
  }

  const columsArray = useMemo(() => requestsColumns, [])
  const dataArray = useMemo(() => requests, [requests])

  const { state, getTableProps, getTableBodyProps, headerGroups, page, prepareRow, setFilter, setPageSize, nextPage, previousPage, canNextPage, canPreviousPage, pageOptions } = useTable({
      columns: columsArray,
      data: dataArray
  }, useFilters, usePagination)

  const { pageIndex } = state

  useEffect(() => {
    setPageSize(5)
  }, [])

  return (
    <div>
      <div className='grid grid-cols-2 gap-2 items-center h-[425px] max-h-[425px]'>
        <div className='h-full flex flex-col'>
          <div className='flex items-center justify-between'>
            <h1 className='text-xl font-bold py-1 h-fit'>Requests Info</h1>
            { notif?.msg && <p className='text-xs bg-green-500 text-white rounded-full py-1 px-2 font-medium'>{ notif.msg }</p> }
            { notif?.err && <p className='text-xs bg-red-500 text-white rounded-full py-1 px-3 font-medium'>{ notif.err }</p> }
          </div>
          <div className='shadow mt-2 rounded flex flex-col justify-center bg-white h-full px-5'>
            {
              requests.length === 0 ? (
                <p className='text-center text-sm font-medium'>
                  Nice! No request found.
                </p>
              ) : (
                <>
                  <div>
                    <div className='flex justify-between items-center'>
                      <h3 className='text-xs font-bold text-gray-500 py-2'>Request Info:</h3>
                      { requests.length > 0 && <button onDoubleClick={() => handleDelete(requests[0]._id, 2)} title='Double click to delete' className=' bg-red-500 text-white text-lg p-1 rounded h-fit'><MdDelete /></button> }
                    </div>
                    {requests.length === 0 ? <p>No request found</p> : <p className='request-info items-center pb-1'><span className='text-sm font-medium'>Concern:</span><span>{ requests[0].req_type }</span></p> }
                    {requests.length === 0 ? <p>No request found</p> : <p className='request-info items-center pb-1'><span className='self-start text-sm font-medium'>Message:</span> <span className='h-24 overflow-y-auto'>{ requests[0].message }</span></p>}
                  </div>
                  <div className='mt-1'>
                    <h3 className='text-xs font-bold text-gray-500 py-2'>Student Info:</h3>
                    {requests.length === 0 ? <p>No request found</p> : <p className='request-name items-center pb-1'><span className='text-sm font-medium'>Name:</span> <span className='whitespace-nowrap text-ellipsis overflow-hidden'>{ `${requests[0].from_lname}, ${requests[0].from_fname}` }</span></p>}
                    <div className='grid grid-cols-2'>
                      <div>
                        {requests.length === 0 ? <p>No request found</p> : <p className='grid grid-cols-2 items-center pb-1'><span className='text-sm font-medium'>ID:</span> <span className='whitespace-nowrap text-ellipsis overflow-hidden'>{ requests[0].from_studentid }</span></p>}
                        {requests.length === 0 ? <p>No request found</p> : <p className='grid grid-cols-2 items-center pb-1'><span className='text-sm font-medium'>Course:</span> <span className='whitespace-nowrap text-ellipsis overflow-hidden'>{ requests[0].course }</span></p>}
                      </div>
                      <div>
                        {requests.length === 0 ? <p>No request found</p> : <p className='grid grid-cols-2 items-center pb-1'><span className='text-sm font-medium'>Branch:</span> <span className='whitespace-nowrap text-ellipsis overflow-hidden'>{ requests[0].from_branch }</span></p>}
                        {requests.length === 0 ? <p>No request found</p> : <p className='grid grid-cols-2 items-center pb-1'><span className='text-sm font-medium'>Status:</span> <span className='whitespace-nowrap text-ellipsis overflow-hidden'>{ requests[0].req_status }</span></p>}
                      </div>
                    </div>
                  </div>
                  <div className='mt-1'>
                    <h3 className='text-xs font-bold text-gray-500 py-2'>Set Appointment Schedule:</h3>
                    <div className='grid grid-cols-2 gap-2'>
                      {requests.length === 0 ? <p>No request found</p> : <input type="date" id="" className={inputStyle} ref={appoint_date} defaultValue={requests[0].pref_date} />}
                      {requests.length === 0 ? <p>No request found</p> : <button onClick={() => handleSetSchedule(requests[0])} className='bg-green-500 text-sm font-medium text-white rounded shadow'>Set Schedule</button>}
                    </div>
                  </div>
                </>

              )
            }
            

          </div>
        </div>

        <div className='grid grid-rows-2 h-full'>
          <div className='h-full flex flex-col'>
            <h1 className='text-xl h-fit font-bold py-1'>Recent Activity Log</h1>
            <div className='shadow mt-2 rounded flex flex-col h-full justify-between max-h-full bg-white p-4 '>
              <div>
                { 
                  historyInfo.current.length > 0
                  ? historyInfo.current.map(info => (
                        <div key={info._id} className={(info.gauge === 2 ? 'border-red-500' : 'border-green-500') + ' border-l-4 text-sm font-medium p-3 text-gray-800 bg-gray-50 shadow mb-2 flex flex-row justify-between'}>
                          <p>{`${info.from_lname}, ${info.from_fname}`}</p>
                          <p>{info.req_type}</p>
                        </div>
                      ))
                  : <p className='font-medium'>No history recorded</p> 
                }
              </div>
              <div className='flex flex-row gap-2 items-center'>
                <div className='font-bold text-xs mr-1'>Legends:</div>
                <div className='text-sm font-medium py-1 flex flex-row items-center gap-2'><div className='w-[10px] h-[10px] bg-green-500 rounded-full'></div><span>Scheduled</span></div>
                <div className='text-sm font-medium py-1 flex flex-row items-center gap-2'><div className='w-[10px] h-[10px] bg-red-500 rounded-full'></div><span>Deleted</span></div>
              </div>

            </div>
          </div>

          <div className='h-full flex flex-col'>
            <h1 className='text-xl h-fit font-bold py-2'>Options</h1>
            <div className='shadow h-full rounded flex flex-col justify-center gap-2 bg-white p-4'>
              <div>
                <label className='text-sm font-medium' htmlFor="filter_by">Filter type by:</label>
                <select onChange={e => setFilter('req_type', e.target.value)} className={inputStyle} id="filter_by">
                  <option value="">None</option>
                  <option value="Missing ID">Missing ID</option>
                  <option value="Clearance">Clearance</option>
                </select>
              </div>
              <div>
                <label className='text-sm font-medium' htmlFor="search_lastname">Search by last name:</label>
                <input type="text" onChange={e => setFilter('from_lname', e.target.value)} id='search_lastname' className={inputStyle} placeholder='Search by last name...' />
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className='py-2 mt-1'>
        <div className='flex justify-between'>
          <h1 className='text-xl font-bold py-1'>Requests Table</h1>
          <div className='flex items-center w-1/4 justify-center gap-3'>
            <button className={(!canPreviousPage ? 'opacity-50 bg-orange-900' : '')+ ' bg-orange-500 py-1 px-2 text-xs flex items-center justify-center font-medium rounded text-white'} onClick={() => previousPage()} disabled={!canPreviousPage}>
              <span className='text-lg'><IoIosArrowBack /></span>
              <span className=''>Prev</span>
            </button>
            <p className='text-sm font-bold'>{`${pageIndex + 1} / ${pageOptions.length}`}</p>
            <button className={(!canNextPage ? 'opacity-50 bg-orange-900' : '')+ ' bg-orange-500 py-1 px-2 text-xs flex items-center justify-center font-medium rounded text-white'} onClick={() => nextPage()} disabled={!canNextPage}>
              <span className=''>Next</span>
              <span className='text-lg'><IoIosArrowForward /></span>
            </button>
          </div>
        </div>

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
                  page.length > 0 ? 
                    page.map(row => {
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

export default RequestList