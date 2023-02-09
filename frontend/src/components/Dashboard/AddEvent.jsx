import React, { useState, useRef } from 'react'
import { useSystem } from '../../context/SystemContext'
import axios from 'axios'

const AddEvent = () => {
    const { data } = useSystem()
    const [img, setImg] = useState('')
    const title = useRef(null)
    const description = useRef(null)
    const campus = useRef(null)
    const when = useRef(null)

    const inputStyle = 'block border shadow rounded w-full text-sm py-2 px-3 border-gray-300'
    const defaultImage = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'

    const handleAddEvent = e => {
        e.preventDefault()

        axios.post('http://localhost:8000/dashboard/student/add', {
            title: title.current.value,
            description: description.current.value,
            campus: campus.current.value,
            when: when.current.value,
            picture: img
        })
    }

  return (
    <div className='mx-6 mt-2'>
        <h1 className='text-3xl font-extrabold py-2'>Add Event</h1>
        <form onSubmit={handleAddEvent} className='bg-white shadow p-6 text-sm mt-2'>
            <p className='pb-2 font-medium'>Please fill out the input fields...</p>
            <div className='flex justify-between gap-4 border-b py-2'>
                <div className='w-1/2'>
                    <h3 className='text-xs font-bold text-gray-500 py-2'>Event Information</h3>
                    <div className='input-field-addstudent'>
                        <label htmlFor="title">Title:</label>
                        <input type="text" className={inputStyle} id='title' placeholder='Enter event title...' />
                    </div>
                    <div className='input-field-addstudent'>
                        <label htmlFor="description" className='py-2 self-start'>Description:</label>
                        <textarea className={inputStyle} id='description' placeholder='Lorem ipsum dolor sit amet, consectetur adipisicing...' rows='4' />
                    </div>
                    <div className='input-field-addstudent'>
                        <label htmlFor="campus">Campus:</label>
                        <select className={inputStyle} id='campus'>
                            <option value="Main">Cainta Main Campus</option>
                            <option value="Taytay">Taytay Campus</option>
                        </select>
                    </div>
                    <div className='input-field-addstudent'>
                        <label htmlFor="when">When:</label>
                        <input type="date" className={inputStyle} id='when' />
                    </div>
                </div>
                <div className='w-1/2'>
                    <h3 className='text-xs font-bold text-gray-500 py-2'>Event Preview</h3>
                    <div className='input-field-addstudent'>
                        <label htmlFor="profile_pic" className='py-2 self-start'>Event Snapshot:</label>
                        <div className='flex flex-col gap-2'>
                            <img src={img ? img : defaultImage} className='w-full shadow h-[200px] object-cover object-center' alt="" />
                            <input type="text" onChange={e => setImg(e.target.value)} className={inputStyle + ' self-start'} id='profile_pic' placeholder='Snapshot link...' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-row items-center mt-2 gap-2'>
                <button type="submit" className='border-2 border-orange-500 text-white bg-orange-500 hover:text-orange-500 hover:bg-transparent py-1 px-3 rounded font-semibold duration-200 text-sm shadow-sm'>Add Event</button>
                <span className='font-medium text-xs text-gray-400'>Your admin id is: { data._id }</span>
            </div>

        </form>
    </div>
  )
}

export default AddEvent