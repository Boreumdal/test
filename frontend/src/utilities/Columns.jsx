import { FaEdit } from 'react-icons/fa'
import { BsCheckCircleFill } from 'react-icons/bs'

// STUDENT DASHBOARD
const requestColumns = [
    {
      Header: 'ID',
      accessor: '_id',
      className: 'text-left'
    },
    {
      Header: 'Topic',
      accessor: 'req_type',
      className: 'text-left'
    },
    {
      Header: 'Name',
      className: 'text-left',
      Cell: ({row}) => (
        <>
          <span className="item title">{`${row.original.from_fname}, ${row.original.from_lname}`}</span>
        </>
      )
    },
    {
      Header: 'Branch',
      accessor: 'from_branch',
      className: 'text-left'
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
      Header: 'Preferred Date',
      accessor: 'pref_date',
      className: 'text-center'
    },
    {
      Header: 'Status',
      accessor: 'req_status',
      className: 'text-center'
    }
]

const scheduleColumns = [
    {
      Header: 'ID',
      accessor: '_id',
      className: 'text-left'
    },
    {
      Header: 'Topic',
      accessor: 'req_type',
      className: 'text-left'
    },
    {
      Header: 'Name',
      className: 'text-left',
      Cell: ({row}) => (
        <>
          <span className="item title">{`${row.original.from_fname}, ${row.original.from_lname}`}</span>
        </>
      )
    },
    {
      Header: 'Branch',
      accessor: 'from_branch',
      className: 'text-left'
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
      Header: 'Appointed Date',
      accessor: 'pref_date',
      className: 'text-center'
    },
    {
      Header: 'Status',
      accessor: 'req_status',
      className: 'text-center'
    }
]

// ADMIN DASHBOARD
const studentsListColumns = [
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

const schedulesColumns = [
    {
      Header: 'Topic',
      accessor: 'req_type',
      className: 'text-left'
    },
    {
      Header: 'Name',
      className: 'text-left',
      Cell: ({row}) => (
        <>
          <span>{`${row.original.from_fname}, ${row.original.from_lname}`}</span>
        </>
      )
    },
    {
      Header: 'ID',
      accessor: 'from_studentid',
      className: 'text-left'
    },
    {
      Header: 'Branch',
      accessor: 'from_branch',
      className: 'text-left'
    },
    {
      Header: 'Appointment',
      accessor: 'appointed_date',
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
      Header: 'Status',
      accessor: 'req_status',
      className: 'text-center'
    },
    {
      Header: 'Option',
      className: 'text-center',
      Cell: ({ row }) => <>{ row.original.req_status !== 'Done' && <button onClick={() => handleDoneSchedule(row.original._id)} className='text-green-500 text-lg'><BsCheckCircleFill /></button> }</>
    }
]

const requestsColumns = [
    {
      Header: 'Topic',
      accessor: 'req_type',
      className: 'text-left'
    },
    {
      Header: 'First Name',
      accessor: 'from_fname',
      className: 'text-left'
    },
    {
      Header: 'Last Name',
      accessor: 'from_lname',
      className: 'text-left'
    },
    {
      Header: 'Student ID',
      accessor: 'from_studentid',
      className: 'text-left'
    },
    {
      Header: 'Branch',
      accessor: 'from_branch',
      className: 'text-left'
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
      Header: 'Status',
      accessor: 'req_status',
      className: 'text-center'
    }
]

const eventsColumns = [
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

export { requestColumns, scheduleColumns, studentsListColumns, schedulesColumns, requestsColumns, eventsColumns }