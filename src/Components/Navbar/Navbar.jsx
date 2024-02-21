import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Navbar = () => {
    const {user, logOut}= useContext(AuthContext)
    const handleSignOut=()=>{
         logOut()
         .then(result=>{
          console.log(result.user)
         })
  
         .then(error=>{
          console.error(error)
         })
    }
    const navOptions = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/addProduct">Add Product</Link></li>
    <li><Link to="/myCart">My Cart</Link></li>
    </>
    return (
        <>
        <div className="navbar  fixed z-10 bg-opacity-30  bg-blue-950 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box  w-52">
                        {navOptions}
                    </ul>
                </div>
                <Link className='flex justify-center items-center'  to="/">
                    <img src="./logo.png" className='h-20 w-20' alt="" />
                    <h2 className='font-bold text-2xl italic'>FashionFusion</h2>
                    </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal font-semibold text-xl px-1">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-end">
            {user ? (
            <div className="flex items-center">
             
              <img
                src={user.photoURL} 
                alt="Profile"
                className="h-10 w-10 rounded-full mr-1"
              />
              <span className="text-lg font-semibold">{user.displayName}</span>
              <Link>
                <button onClick={handleSignOut} className="btn btn-grad text-white ml-3">
                  Sign Out
                </button>
              </Link>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn btn-grad text-white">Login</button>
            </Link>
          )}
 
            </div>
        </div>
    </>
    );
};

export default Navbar;