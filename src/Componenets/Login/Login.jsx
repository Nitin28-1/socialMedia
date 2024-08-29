import "./Login.css"
import {Link} from "react-router-dom"
import Notification from "../Page1/Notification/Notification";
import LoadingC from "../LoadingC/LoadingC";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";


export default function Login() {


  const handlelogin=(e)=>
    {
      e.preventDefault();
    }

  
  return (
    <div className='w-[100vw] h-[100vh] bg-purple-200 flex justify-center	items-center ' >

        <div className='w-[600px]  bg-white flex rounded-[10px]'>

            <div className='first_box w-[50%] bg-purple-300 p-5'>
                
                <h1 className='text-[45px] font-bold text-white'>Hello World</h1>

                <p className="text-[15px] py-5 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis fuga rem esse odit earum eaque porro, rerum amet animi laboriosam.</p>

                <p className="text-[18px] py-3 text-white">Don't you have an account?</p>

                <Link to="/Register">
                <button className={`text-[17px] px-10 bg-white p-1 `}>Register</button>
                </Link>


            </div>

        
            
            <div className='w-[50%] p-4 flex flex-col gap-5'>
               <h1 className="text-[25px] font-semibold">Login       </h1>

               <h1 className="text-red-600">* Enter Any Demo Details</h1>

               <form onSubmit={handlelogin} >
                <label htmlFor="" className="block"> Email.</label>
                <input type="email" className={`mb-4 border border-solid-3px w-[80%] `} name="email" />
                 
                 <label htmlFor="" className="block">Password</label>
                 <input type="password" className="mb-4 border border-solid-3px w-[80%] block" name="password"/>
                 
                 <button className={`bg-purple-500 w-[140px] text-white px-6 py-1 `} >Login</button>
                
               </form>
               
            </div>
         
        </div>

      
        <Notification />


    </div>
  )
}
