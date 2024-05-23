import { useState } from "react"
import Header from "./Header"
const Login = () => { 
  const [isSignInForm,setIsSignInForm] =useState(true)
    const toggleSignInForm=()=>{
          setIsSignInForm(!isSignInForm)
    }

  return (
    <div>
        <Header/>
    <div className="absolute ">
      <img 
      src="https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/ca15fd28-b624-4852-8bfe-9cdd5c88475d/IN-en-20240520-popsignuptwoweeks-perspective_alpha_website_small.jpg" 
      alt="bg-img"
      />
    </div>
    <form className="text-white w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 bg-opacity-80">
      <h1 className="font-bold text-3xl py-4">{isSignInForm?"Sign In": "Sign Up"}</h1>
      {!isSignInForm && <input type="text" placeholder="Full Name" className=" rounded-lg p-4 my-4 w-full bg-gray-700 " />}
      {!isSignInForm && <input type="text" placeholder="Full Name" className=" rounded-lg p-4 my-4 w-full bg-gray-700 " />}
      {!isSignInForm && <input type="date" className=" rounded-lg p-4 my-4 w-full bg-gray-700 " />}
      <input type="text" placeholder="Mobile NUmber" className=" rounded-lg p-4 my-4 w-full bg-gray-700 " /><br></br>
      <input type="text" placeholder="Password" className=" rounded-lg p-4 my-4 w-full bg-gray-700"/><br></br>
      <button className="w-full h-auto p-4 my-6 rounded-lg bg-red-700">{isSignInForm?"Sign In": "Sign Up"}</button>
      <p className="py-4 font-medium cursor-pointer" onClick={toggleSignInForm} >
        {isSignInForm?"New to Netflix? Sign up now.": "Already Registered? Sign IN Now."}</p>
    </form>
    </div>
  )
}

export default Login