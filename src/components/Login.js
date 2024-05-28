import { useState ,useRef} from "react"
import Header from "./Header"
import {checkValidData} from "../utils/Validate"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Login = () => { 
  const [isSignInForm,setIsSignInForm] =useState(true)
  const [errMessage, setErrorMessage]=useState(null)
  const navigate=useNavigate();
  const dispatch=useDispatch();

    const toggleSignInForm=()=>{
          setIsSignInForm(!isSignInForm)
    }

    const name=useRef(null);
    const email=useRef(null);
    const password=useRef(null);

    const handleButtonClick=()=>{

      const message=checkValidData(email?.current?.value ,password?.current?.value);
      setErrorMessage(message);
      
      if(message) return ;

      if(!isSignInForm){
        //Sign up logic
        createUserWithEmailAndPassword(auth, email?.current?.value ,password?.current?.value)
          .then((userCredential) => { 
            const user = userCredential.user;
            updateProfile(user, {
              displayName: name?.current?.value , photoURL: "https://lh3.googleusercontent.com/ogw/AF2bZyibjW9eA2rzEb-Hi5trPRWNG40YHLluq4v6zrHAOwN_X7E=s32-c-mo"
            }).then(() => {
              const {uid,email, displayName,photoURL} = auth.currentUser;
              dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
              navigate("/browse");
            }).catch((error) => {
              setErrorMessage(error.message);
            });
            navigate("/browse")
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode+" - "+errorMessage);
          });
      }else{
        //sign In Logic
        signInWithEmailAndPassword(auth, email?.current?.value ,password?.current?.value)
          .then((userCredential) => { 
          const user = userCredential.user;
          console.log(user);
          navigate("/browse")
          })
          .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+" - "+errorMessage);
        });
      }

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
    <form onSubmit={(e)=>e.preventDefault()} className="text-white w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 bg-opacity-80">
      <h1 className="font-bold text-3xl py-4">{isSignInForm?"Sign In": "Sign Up"}</h1>
      { isSignInForm? 
         <div>
            <input ref={email} type="text" placeholder="Email address" className=" rounded-lg p-4 my-4 w-full bg-gray-700 " /><br></br>
            <input ref={password} type="password" placeholder="Password" className=" rounded-lg p-4 my-4 w-full bg-gray-700"/><br></br>
         </div>  :
         <div>
            <input ref={name} type="text" placeholder="Full Name" className=" rounded-lg p-4 my-4 w-full bg-gray-700 " />
            <input type="text" placeholder="Mobile NUmber" className=" rounded-lg p-4 my-4 w-full bg-gray-700 " />
            <input type="date" className=" cursor-none rounded-lg p-4 my-4 w-full bg-gray-700 " />
            <input ref={email} type="text" placeholder="Email address" className=" rounded-lg p-4 my-4 w-full bg-gray-700 " /><br></br>
            <input ref={password} type="password" placeholder="Password" className=" rounded-lg p-4 my-4 w-full bg-gray-700"/><br></br>
         </div>
    }
      <p className="text-red-600 font-bold my-2  ">{errMessage }</p>
      <button onClick={handleButtonClick} className="w-full h-auto p-4 my-6 rounded-lg bg-red-700">{isSignInForm?"Sign In": "Sign Up"}</button>
      <p className="py-4 font-medium cursor-pointer" onClick={toggleSignInForm} >
        {isSignInForm?"New to Netflix? Sign up now.": "Already Registered? Sign In now."}</p>
    </form>
    </div>
  )
}

export default Login