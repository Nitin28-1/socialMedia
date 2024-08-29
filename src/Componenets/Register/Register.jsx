import { useState } from "react"
import "./Register.css"
import {Link} from "react-router-dom"
import p1 from "../Page1/photo/Picture/p6.svg"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth, db } from "../Page1/Firebase/Firebase"
import { doc, setDoc } from "firebase/firestore"
import Notification from "../Page1/Notification/Notification"
import UploadFile from "../Page1/Firebase/UploadFile"
import { toast } from "react-toastify"

export default function Register() {
 
   const [loading,setloading]=useState(false)
;
    const [avtar,setavtar]=useState({
      file:null,
      url:""
    })

    const handleimg=(e)=>
    {  if(e.target.files[0])
      {
        setavtar({
          file: e.target.files[0],
          url: URL.createObjectURL(e.target.files[0]),
        })
      }
     
    }



    const  handlnewuser= async (e)=>
      { 
        e.preventDefault();
        
        const formdata= new FormData(e.target);

        const {username,email,password,name} =Object.fromEntries(formdata);
        e.target.value="";

      try {
        setloading(true);
        const temp= await createUserWithEmailAndPassword(auth,email,password);
      
        const imgUrl= await UploadFile(avtar.file)

        await setDoc(doc(db, "user",temp.user.uid ), {
          username,
          email,
          password,
          name,
          imgUrl,
          id: temp.user.uid,
          blocked: [],
        });

    
        await setDoc(doc(db, "users_chats",temp.user.uid ), {
          chats: [],
        });
        toast.success("Account  Created Successfully");
       
        

      }catch(res)
      {  setloading(false);
         console.log(res);
         toast.error(res.message);
      }
      finally
      {
        setloading(false);
      }

      }

  return (
    <div className='w-[100vw] h-[100vh] bg-purple-200 flex justify-center	items-center ' >

        <div className='w-[600px]  bg-white flex rounded-[10px]'>

           
            
            <div className='w-[50%] p-4 flex flex-col gap-5'>
               <h1 className="text-[25px] font-semibold">Register  </h1>

               <form  onSubmit={handlnewuser}>

               <div className="flex items-center gap-3 mb-2
                 ">
                <img src={ avtar.url || p1} alt=""className="w-[50px] h-[50px] object-fill" />
                <label htmlFor="file">Choose Profile Picture</label>
                <input type="file" className="hidden" id="file" onChange={(e)=>(handleimg(e))}/>
                </div>
              
                <label htmlFor="" className="block">Username</label>
                <input type="text" className="mb-4 border border-solid-3px w-[80%]" name="username" />

                <label htmlFor="" className="block">Email</label>
                <input type="Email" className="mb-4 border border-solid-3px w-[80%]" name="email" />
                 
                 <label htmlFor="" className="block">Password</label>
                 <input type="password" className="mb-4 border border-solid-3px w-[80%] block"  name="password"/>

                 <label htmlFor="" className="block">Name</label>
                <input type="text" className="mb-4 border border-solid-3px w-[80%]"  name="name"/>
                 
               

                 <button className={` bg-purple-500 w-[140px] text-white px-6 py-1 mt-3 ${loading ? "cursor-progress	" : "cursor-pointer	"} `}>Register</button>
               </form>
               
            </div>


            <div className='first_boxx w-[50%] bg-purple-300 p-5'>
                
                <h1 className='text-[45px] font-bold text-white'>Lemon Social</h1>

                <p className="text-[15px] py-5 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis fuga rem esse odit earum eaque porro, rerum amet animi laboriosam.</p>

                <p className="text-[18px] py-3 text-white">Don't you have an account?</p>

                <Link to="/Login">
                <button className={`text-[17px] px-10 bg-white p-1 ${loading ? "cursor-progress	" : "cursor-pointer	"}`}>Login</button>
                </Link>


            </div>

        </div>
        
       <Notification />

    </div>
  )
}