import React, { useState, useEffect } from 'react'
import { useSystem } from '../../context/SystemContext'
import axios from 'axios'
import { autoCapital } from '../../utilities/UtilityFunction'

const AddStudent = () => {
    const { data, notif, setNotif } = useSystem()
    const [img, setImg] = useState('')
    const [fname, setFname] = useState('')
    const [mname, setMname] = useState('')
    const [lname, setLname] = useState('')
    const [gender, setGender] = useState('Male')
    const [studentId, setStudentId] = useState('')
    const [year, setYear] = useState(1)
    const [course, setCourse] = useState('BSIT')
    const [branch, setBranch] = useState('Cainta Main')
    const [status, setStatus] = useState('Regular')
    const [contact, setContact] = useState('')
    const [email, setEmail] = useState('')
    const [uname, setUname] = useState('')
    const [password, setPassword] = useState('')
    const [idAsUsername, setIdAsUsername] = useState(false)

    const inputStyle = 'block border shadow rounded w-full text-sm py-2 px-3 border-gray-300'
    const defaultImage = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
    
    const reset = () => {
        setFname('')
        setMname('')
        setLname('')
        setGender('Male')
        setStudentId('')
        setYear(1)
        setCourse('BSIT')
        setBranch('Cainta Main')
        setStatus('Regular')
        setContact('')
        setEmail('')
        setUname('')
        setPassword('')
        setImg('')
    }

    useEffect(() => {
        if (idAsUsername){
            setUname(studentId)
        }
    }, [idAsUsername])

    const handleAddStudent = e => {
        e.preventDefault()
        if (fname && mname && lname && gender && studentId && year && course && branch && status && contact && email && img && password){
            axios.post('http://localhost:8000/dashboard/student/add', {
                first_name: autoCapital(fname),
                middle_name: autoCapital(mname),
                last_name: autoCapital(lname),
                gender,
                student_id: studentId,
                year_level: year,
                course,
                branch,
                status,
                contact,
                email,
                profile: img ? img : defaultImage,
                student_username: uname,
                password
            })
            .then(response => {
                setNotif(response.data)
                reset()
            })
        } else {
            setNotif({ err: 'Please fill up all fields before adding'})
        }
    }

    const idAsUsernameFunc = e => {
        const val = e.target.value
        setStudentId(val)
        setUname(val)
    }

  return (
    <div className='mx-6 mt-2'>
        <h1 className='text-3xl font-extrabold py-2'>Add Student</h1>
        <form onSubmit={handleAddStudent} className='bg-white shadow p-6 text-sm mt-2'>
            <p className='pb-2 font-medium'>Please fill out the input fields...</p>
            <div className='flex justify-between gap-4 border-b py-2'>
                <div className='w-1/2'>
                    <h3 className='text-xs font-bold text-gray-500 py-2'>Personal Information</h3>
                    <div className='input-field-addstudent'>
                        <label htmlFor="name">Name:</label>
                        <div className='flex gap-1'>
                            <input type="text" onChange={e => setFname(e.target.value)} value={fname} className={inputStyle} placeholder='First' />
                            <input type="text" onChange={e => setMname(e.target.value)} value={mname} className={inputStyle} placeholder='Middle' />
                            <input type="text" onChange={e => setLname(e.target.value)} value={lname} className={inputStyle} placeholder='Last' />
                        </div>
                    </div>
                    <div className='input-field-addstudent'>
                        <label htmlFor="">Gender:</label>
                        <select className={inputStyle} value={gender} onChange={e => setGender(e.target.value)}>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                </div>

                <div className='w-1/2'>
                    <h3 className='text-xs font-bold text-gray-500 py-2'>Contact Information</h3>
                    <div className='input-field-addstudent'>
                        <label htmlFor="contact">Contact Number:</label>
                        <input type="number" onChange={e => setContact(e.target.value)} value={contact} className={inputStyle} id='contact' placeholder='Contact Number...' />
                    </div>
                    <div className='input-field-addstudent'>
                        <label htmlFor="email">Email:</label>
                        <input type="email" onChange={e => setEmail(e.target.value)} value={email} className={inputStyle} id='email' placeholder='Email...' />
                    </div>
                </div>
            </div>
            
            <div className='flex justify-between gap-4 border-b py-2'>
                <div className='w-1/2'>
                    <h3 className='text-xs font-bold text-gray-500 py-2'>Student Information</h3>
                    <div className='input-field-addstudent'>
                        <label htmlFor="student_id">Student ID:</label>
                        <input type="text" onChange={e => idAsUsername ? idAsUsernameFunc(e) : setStudentId(e.target.value)} value={studentId} className={inputStyle} id='student_id' placeholder='TA23XXXX' />
                    </div>
                    <div className='input-field-addstudent'>
                        <label htmlFor="year">Year Level:</label>
                        <input type="number" onChange={e => setYear(e.target.value)} value={year} className={inputStyle} id='year' placeholder='4' />
                    </div>
                    <div className='input-field-addstudent'>
                        <label htmlFor="course">Course:</label>
                        <select className={inputStyle} value={course} onChange={e => setCourse(e.target.value)} id='course'>
                            <option value="BSIT">BSIT</option>
                            <option value="BSCS">BSCS</option>
                        </select>
                    </div>
                    <div className='input-field-addstudent'>
                        <label htmlFor="branch">Branch:</label>
                        <select className={inputStyle} value={branch} onChange={e => setBranch(e.target.value)} id='branch'>
                            <option value="Main">Main</option>
                            <option value="Taytay">Taytay</option>
                        </select>
                    </div>
                    <div className='input-field-addstudent'>
                        <label htmlFor="status">Status:</label>
                        <select className={inputStyle} value={status} onChange={e => setStatus(e.target.value)} id='status'>
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
                            <input type="text" onChange={e => setImg(e.target.value)} value={img} className={inputStyle + ' self-start'} id='profile_pic' placeholder='Student picture link...' />
                            <img src={img ? img : defaultImage} className='w-full h-[110px] shadow object-cover' alt="" />
                        </div>
                        
                    </div>
                    <div className='input-field-addstudent'>
                        <label htmlFor="username">Username:</label>
                        <input type="text" onChange={e => !idAsUsername && setUname(e.target.value)} value={uname} className={inputStyle} id='username' placeholder='Student username...' disabled={idAsUsername ? true : ''} />
                    </div>
                    <div className='input-field-addstudent py-1 pb-2'>
                        <div>
                            
                        </div>
                        <div className='flex gap-2'>
                            <input type="checkbox" onChange={e => setIdAsUsername(e.target.checked)} id="useStudentId"/>
                            <label htmlFor="useStudentId" className=' text-xs'>Use Student ID as username</label>
                        </div>
                            
                    </div>
                    <div className='input-field-addstudent'>
                        <label htmlFor="password">Password:</label>
                        <input type="password" onChange={e => setPassword(e.target.value)} value={password} className={inputStyle} id='password' placeholder='Password...' />
                    </div>
                </div>
            </div>
            <div className='flex flex-row justify-between items-center mt-2 gap-2'>
                <div className='flex items-center gap-2'>
                    <button type="submit" className='border-2 border-green-500 text-white bg-green-500 hover:text-green-500 hover:bg-transparent py-1 px-3 rounded font-semibold duration-200 text-sm shadow-sm'>Add Student</button>
                    <span className='font-medium text-xs text-gray-400'>Your admin id is: { data._id }</span>
                </div>
                { notif?.msg && <p className='text-xs bg-green-500 text-white rounded-full py-1 px-3 font-medium'>{ notif.msg }</p> }
                { notif?.err && <p className='text-xs bg-red-500 text-white rounded-full py-1 px-3 font-medium'>{ notif.err }</p> }

            </div>
        </form>
    </div>
  )
}

export default AddStudent