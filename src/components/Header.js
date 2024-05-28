import React from 'react'
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate=useNavigate()
  const user= useSelector(store => store.user)

  const handleSignout = () => {
    signOut(auth).then(() => {
      navigate('/')
    }).catch((error) => {
      navigate("/error")
    });
  }

  return (
      <div className='absolute w-screen bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className=' w-52 px-2 py-2' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo"/>
      { user && (
        <div className='mx-10' >
          <img className=' h-20 p-2 m-1 mb-0 ' src={user?.photoURL} alt="user-logo" />
          <button onClick={handleSignout} className="bg-blue-700 text-white rounded-lg p-2 mt-0 m-2 h-10 ">Sign Out</button>
        </div>)}
      </div>
  )
}

export default Header