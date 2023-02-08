import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'

const App = () => {
  return (
    <div className='w-full'>
      <Navbar />
      <div>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='admin/dashboard/*' element={<Dashboard />} />
            <Route path='profile' element={<Profile />} />
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App