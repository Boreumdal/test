import React from 'react'

const AddStudent = () => {
  return (
    <div className='mx-6 mt-2'>
        <h1 className='text-3xl font-extrabold py-2'>Add Student</h1>
        <div className='py-2'>
            <form>
                <div>
                    <h3 className='text-xs font-bold text-gray-500 py-2'>Personal Information</h3>
                    <div>
                        <label htmlFor="">Name:</label>
                        <div>
                            <input type="text" placeholder='First' />
                            <input type="text" placeholder='Middle' />
                            <input type="text" placeholder='Last' />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="">Gender:</label>
                        <select>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                </div>

                <div>
                    <h3 className='text-xs font-bold text-gray-500 py-2'>Contact Information</h3>
                    <div>
                        <label htmlFor="contact">Contact Number:</label>
                        <input type="number" id='contact' placeholder='Contact Number...' />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="number" id='email' placeholder='Email...' />
                    </div>
                </div>

                <div>
                    <h3 className='text-xs font-bold text-gray-500 py-2'>Student Information</h3>
                    <div>
                        <label htmlFor="">Year Level:</label>
                        <input type="number" placeholder='Year level...' />
                    </div>
                    <div>
                        <label htmlFor="course">Course:</label>
                        <select id='course'>
                            <option value="BSIT">BSIT</option>
                            <option value="BSCS">BSCS</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="branch">Branch:</label>
                        <select id='branch'>
                            <option value="Main">Main</option>
                            <option value="Taytay">Taytay</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="status">Status:</label>
                        <select id='status'>
                            <option value="Regular">Regular</option>
                            <option value="Irregular">Irregular</option>
                        </select>
                    </div>
                </div>

                <div>
                    <h3 className='text-xs font-bold text-gray-500 py-2'>Account Information</h3>
                    <div>
                        <label htmlFor="username">username:</label>
                        <input type="number" id='username' placeholder='Student username...' />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input type="number" id='password' placeholder='Password...' />
                    </div>
                </div>

            </form>
        </div>
    </div>
  )
}

export default AddStudent