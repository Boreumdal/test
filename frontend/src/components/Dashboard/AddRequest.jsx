import React, { useState, useRef } from 'react'
import { useSystem } from '../../context/SystemContext'
import axios from 'axios'
import { autoCapital } from '../../utilities/UtilityFunction'

const AddRequest = () => {
    const { data, notif, setNotif } = useSystem()

    const [reqType, setReqType] = useState('Missing ID')
    const [message, setMessage] = useState('')
    const [preferredDate, setPreferredDate] = useState('')

    const inputStyle = 'block border shadow rounded w-full text-sm py-2 px-3 border-gray-300'
    const defaultImage = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'

    const reset = () => {
        setMessage('')
        setReqType('Missing ID')
        setPreferredDate('')
    }

    const handleAddRequest = e => {
        e.preventDefault()

        // if (message && reqType && preferredDate){
        //     axios.post('http://localhost:8000/dashboard/event/add', { 
        //         title: autoCapital(title), 
        //         message: autoCapital(message), 
        //         reqType, preferredDate, picture: img ? img : defaultImage
        //     })
        //         .then(response => {
        //             setNotif(response.data)
        //             reset()
        //         })
        // } else {
        //     setNotif({ err: 'Please fill up all fields before adding'})
        // }

        reset()
            
    }
    
  return (
    <div className='mx-6 mt-2'>
        <h1 className='text-3xl font-extrabold py-2'>Send Request</h1>
        <form onSubmit={handleAddRequest} className='bg-white shadow p-6 text-sm mt-2'>
            <p className='pb-2 font-medium'>Please fill out the input fields...</p>
            <div className='flex justify-between gap-4 border-b py-2'>
                <div className='w-1/2'>
                    <h3 className='text-xs font-bold text-gray-500 py-2'>Event Information</h3>
                    <div className='input-field-addstudent'>
                        <label htmlFor="reqType">Topic:</label>
                        <select className={inputStyle} value={reqType} onChange={e => setReqType(e.target.value)} id='campus'>
                            <option value="Missing ID">Missing ID</option>
                            <option value="Clearance">Clearance</option>
                        </select>
                    </div>
                    <div className='input-field-addstudent'>
                        <label htmlFor="message" className='py-2 self-start'>Message:</label>
                        <textarea className={inputStyle} onChange={e => setMessage(e.target.value)} id='message' value={message} placeholder='Lorem ipsum dolor sit amet, consectetur adipisicing...' rows='4' />
                    </div>
                    <div className='input-field-addstudent'>
                        <label htmlFor="preferredDate">Preferred Date:</label>
                        <input type="date" onChange={e => setPreferredDate(e.target.value)} className={inputStyle} id='preferredDate' value={preferredDate} />
                    </div>
                </div>
                <div className='w-1/2'>
                    <h3 className='text-xs font-bold text-gray-500 py-2'>Notes:</h3>
                    <div className='bg-orange-500 rounded text-white my-2 px-2 py-3 text-xs font-medium'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia esse perferendis qui ab.</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-row justify-between items-center mt-2 gap-2'>
                <div className='flex items-center gap-2'>
                    <button type="submit" className='border-2 border-orange-500 text-white bg-orange-500 hover:text-orange-500 hover:bg-transparent py-1 px-3 rounded font-semibold duration-200 text-sm shadow-sm'>Add Event</button>
                    <p className='font-medium text-xs text-gray-400'>Your ID is: { data._id }</p>
                </div>
                { notif?.msg && <p className='text-xs bg-green-500 text-white rounded-full py-1 px-3 font-medium'>{ notif.msg }</p> }
                { notif?.err && <p className='text-xs bg-red-500 text-white rounded-full py-1 px-3 font-medium'>{ notif.err }</p> }
                
            </div>
    {reqType}
    {message}
    {preferredDate}
        </form>
    </div>
  )
}

export default AddRequest