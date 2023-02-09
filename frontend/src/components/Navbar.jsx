import { Link } from 'react-router-dom'
import { useSystem } from '../context/SystemContext'

const Navbar = () => {
  const { token } = useSystem()
  return (
    <nav className='bg-white shadow-sm h-[8vh] flex items-center justify-between px-5'>
      <div>
        <Link to='/' className='font-extrabold text-4xl'>SCMS</Link>
      </div>
      <div>
        { token && <button className='border-2 border-red-500 hover:bg-red-500 hover:text-white text-red-500 hover:bg-transparent py-1 px-3 rounded font-semibold duration-300 text-sm shadow-sm'>Logout</button> }
      </div>
    </nav>
  )
}

export default Navbar