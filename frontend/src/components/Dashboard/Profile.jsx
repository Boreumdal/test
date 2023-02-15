import React from 'react'
import { useSystem } from '../../context/SystemContext'
import { IoLocationSharp, IoPerson } from 'react-icons/io5'

const Profile = () => {
  const { data } = useSystem()
  return (
    <div className='m-8 p-6 bg-white shadow flex flex-col gap-2'>
      <div className='w-full profile-container gap-1'>
        <div className=''>
          <img src={data?.profile} className='aspect-square w-[90%] mx-auto rounded-lg shadow object-cover object-center' />
        </div>
        <div className='flex flex-col py-2'>
          <div className='flex flex-col gap-1'>
            <h1 className='text-3xl font-bold'>{ `${data?.last_name}, ${data?.first_name} ${data?.middle_name}` }</h1>
            <p className='text-gray-400 text-xs italic'>ID: { data?._id }</p>
          </div>
        </div>
      </div>

      <div className='w-full profile-container gap-1'>
        <div className='mt-2 ml-2'>
          <div className='flex flex-row items-center gap-3 py-2 px-2 italic text-sm mt-1'>
            <p className='text-xl'><IoLocationSharp /></p>
            <p>{ data?.branch }</p>
          </div>
          <div className='flex flex-row items-center gap-3 py-2 px-2 italic text-sm mt-1'>
            <p className='text-xl'><IoPerson /></p>
            <p>Student</p>
          </div>
        </div>

        <div className='grid grid-cols-2'>

          <div className=''>
            <div>
              <h4 className='text-xs font-bold text-gray-400 py-1 mt-1'>Basic Information</h4>
              <div className='grid grid-cols-2 gap-1 py-2 items-center'>
                <p className='text-sm'>Gender:</p>
                <p className='font-medium'>{ data?.gender === 'M' ? 'Male' : 'Female' }</p>
              </div>
            </div>
            
            <div>
              <h4 className='text-xs font-bold text-gray-400 py-1 mt-1'>Contact Information</h4>
              <div className='grid grid-cols-2 gap-1 py-2 items-center'>
                <p className='text-sm'>Email:</p>
                <p className='font-medium'>{ data?.email }</p>
              </div>
              <div className='grid grid-cols-2 gap-1 py-2 items-center'>
                <p className='text-sm'>Contact Number:</p>
                <p className='font-medium'>{ data?.contact }</p>
              </div>
            </div>

            <div>
              <h4 className='text-xs font-bold text-gray-400 py-1 mt-1'>Account Information</h4>
              <div className='grid grid-cols-2 gap-1 py-2 items-center'>
                <p className='text-sm'>Username:</p>
                <p className='font-medium'>{ data?.student_username }</p>
              </div>
              <div className='grid grid-cols-2 gap-1 py-2 items-center'>
                <p className='text-sm'>Password:</p>
                <p className='font-medium'>Preview not allowed</p>
              </div>
            </div> 
          </div>

          <div className=''>
            <div>
              <h4 className='text-xs font-bold text-gray-400 py-1 mt-1'>Student Information</h4>
              <div className='grid grid-cols-2 gap-1 py-2 items-center'>
                <p className='text-sm'>Student ID:</p>
                <p className='font-medium'>{ data?.student_id }</p>
              </div>
              <div className='grid grid-cols-2 gap-1 py-2 items-center'>
                <p className='text-sm'>Enrollment Status:</p>
                <p className='font-medium'>{ data?.status }</p>
              </div>
              <div className='grid grid-cols-2 gap-1 py-2 items-center'>
                <p className='text-sm'>Course:</p>
                <p className='font-medium'>{ data?.course }</p>
              </div>
              <div className='grid grid-cols-2 gap-1 py-2 items-center'>
                <p className='text-sm'>Year Level:</p>
                <p className='font-medium'>{ data?.year_level }</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Profile