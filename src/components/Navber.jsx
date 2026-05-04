
import { useContext } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { AuthContext } from '../provider/AuthProvider'

const Navber = () => {

    //------>  usertest  
    const { usertest } = useContext(AuthContext)
    const { user } = useContext(AuthContext)



    const navinfo = <>

        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/career'>Career</Link></li>

    </>





    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navinfo}
                        </ul>
                    </div>

                    <div className='flex items-center'>
                        <img className='w-12 rounded-full ' src={usertest.photo_url} alt="" />

                        <h3 className=" text-xl px-4 uppercase font-bold">MD. {usertest.name}</h3>

                        <h3 className=" text-xl px-4  font-bold">{user && user.name || "Mr. Been"}</h3>
                        <h3 className=" text-xl">{usertest.email}</h3>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navinfo}
                    </ul>
                </div>
                <div className="navbar-end flex gap-4">

                    <Link to='/auth/login' className="btn flex gap-4 py-2">  <FaUserCircle className='text-3xl ' />Login</Link>
                </div>
            </div>
        </div>
    )
}

export default Navber
