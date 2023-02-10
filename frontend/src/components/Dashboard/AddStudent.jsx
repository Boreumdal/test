import React, { useState } from 'react'
import { useSystem } from '../../context/SystemContext'

const AddStudent = () => {
    const { data } = useSystem()
    const [img, setImg] = useState('')
    const [fname, setFname] = useState('')
    const [mname, setMname] = useState('')
    const [lname, setLname] = useState('')
    const [gender, setGender] = useState('Male')
    const [studentId, setStudentId] = useState('')
    const [year, setYear] = useState(0)
    const [course, setCourse] = useState('BSIT')
    const [branch, setBranch] = useState('Cainta Main')
    const [status, setStatus] = useState('Regular')
    const [contact, setContact] = useState('')
    const [email, setEmail] = useState('')
    const [profile, setProfile] = useState('')
    const [uname, setUname] = useState('')
    const [password, setPassword] = useState('')

    const reset = () => {
        setFname('')
        setMname('')
        setLname('')
        setGender('Male')
        setStudentId('')
        setYear(0)
        setCourse('BSIT')
        setBranch('Cainta Main')
        setStatus('Regular')
        setContact('')
        setEmail('')
        setProfile('')
        setUname('')
        setPassword('')
        setImg('')
    }

    const handleAddStudent = e => {
        
    }

    const inputStyle = 'block border shadow rounded w-full text-sm py-2 px-3 border-gray-300'
    const defaultImage = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
  return (
    <div className='mx-6 mt-2'>
        <h1 className='text-3xl font-extrabold py-2'>Add Student</h1>
        <form className='bg-white shadow p-6 text-sm mt-2'>
            <p className='pb-2 font-medium'>Please fill out the input fields...</p>
            <div className='flex justify-between gap-4 border-b py-2'>
                <div className='w-1/2'>
                    <h3 className='text-xs font-bold text-gray-500 py-2'>Personal Information</h3>
                    <div className='input-field-addstudent'>
                        <label htmlFor="name">Name:</label>
                        <div className='flex gap-1'>
                            <input type="text" className={inputStyle} placeholder='First' />
                            <input type="text" className={inputStyle} placeholder='Middle' />
                            <input type="text" className={inputStyle} placeholder='Last' />
                        </div>
                    </div>
                    <div className='input-field-addstudent'>
                        <label htmlFor="">Gender:</label>
                        <select className={inputStyle}>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                </div>

                <div className='w-1/2'>
                    <h3 className='text-xs font-bold text-gray-500 py-2'>Contact Information</h3>
                    <div className='input-field-addstudent'>
                        <label htmlFor="contact">Contact Number:</label>
                        <input type="number" className={inputStyle} id='contact' placeholder='Contact Number...' />
                    </div>
                    <div className='input-field-addstudent'>
                        <label htmlFor="email">Email:</label>
                        <input type="number" className={inputStyle} id='email' placeholder='Email...' />
                    </div>
                </div>
            </div>
            
            <div className='flex justify-between gap-4 border-b py-2'>
                <div className='w-1/2'>
                    <h3 className='text-xs font-bold text-gray-500 py-2'>Student Information</h3>
                    <div className='input-field-addstudent'>
                        <label htmlFor="student_id">Student ID:</label>
                        <input type="text" className={inputStyle} id='student_id' placeholder='TA23XXXX' />
                    </div>
                    <div className='input-field-addstudent'>
                        <label htmlFor="year">Year Level:</label>
                        <input type="number" className={inputStyle} id='year' placeholder='4' />
                    </div>
                    <div className='input-field-addstudent'>
                        <label htmlFor="course">Course:</label>
                        <select className={inputStyle} id='course'>
                            <option value="BSIT">BSIT</option>
                            <option value="BSCS">BSCS</option>
                        </select>
                    </div>
                    <div className='input-field-addstudent'>
                        <label htmlFor="branch">Branch:</label>
                        <select className={inputStyle} id='branch'>
                            <option value="Main">Main</option>
                            <option value="Taytay">Taytay</option>
                        </select>
                    </div>
                    <div className='input-field-addstudent'>
                        <label htmlFor="status">Status:</label>
                        <select className={inputStyle} id='status'>
                            <option value="Regular">Regular</option>
                            <option value="Irregular">Irregular</option>
                        </select>
                    </div>
                </div>

                <div className='w-1/2'>
                    <h3 className='text-xs font-bold text-gray-500 py-2'>Account Information</h3>
                    <div className='input-field-addstudent'>
                        <label htmlFor="profile_pic" className='py-2 self-start'>Student Picture:</label>
                        <div className='input-field-addstudent-preview'>
                            <input type="text" className={inputStyle + ' self-start'} id='profile_pic' placeholder='Student picture link...' />
                            <img src={img ? img : defaultImage} className='w-full shadow' alt="" />
                        </div>
                        
                    </div>
                    <div className='input-field-addstudent'>
                        <label htmlFor="username">Username:</label>
                        <input type="text" className={inputStyle} id='username' placeholder='Student username...' />
                    </div>
                    <div className='input-field-addstudent'>
                        <div>
                            
                        </div>
                        <div className='flex gap-2'>
                            <input type="checkbox" id="useStudentId"/>
                            <label htmlFor="useStudentId" className='py-2'>Use Student ID as username</label>
                        </div>
                            
                    </div>
                    <div className='input-field-addstudent'>
                        <label htmlFor="password">Password:</label>
                        <input type="password" className={inputStyle} id='password' placeholder='Password...' />
                    </div>
                </div>
            </div>
            <div className='flex flex-row items-center mt-2 gap-2'>
                <button type="submit" className='border-2 border-green-500 text-white bg-green-500 hover:text-green-500 hover:bg-transparent py-1 px-3 rounded font-semibold duration-200 text-sm shadow-sm'>Add Student</button>
                <span className='font-medium text-xs text-gray-400'>Your admin id is: { data._id }</span>
            </div>

        </form>
    </div>
  )
}

export default AddStudent