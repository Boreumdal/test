import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-white shadow-sm h-[8vh] flex items-center justify-between px-5'>
      <div>
        <Link to='/' className='font-extrabold text-4xl'>SCMS</Link>
      </div>
      <div>
        <Link to='/login' className='bg-green-500 text-white py-2 px-3 text-sm rounded'>Sign In</Link>
      </div>
    </nav>
  )
}

export default Navbar