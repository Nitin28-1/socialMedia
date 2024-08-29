import { IoHomeOutline } from "react-icons/io5";
import { RiAppsLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { IoIosContact } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import "./Navbar.css"
import DarkMode from "../DarkMode/DarkMode";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
  Link,
} from "react-router-dom";


export default function Navbar() {
  return (
    <div className="  h-[60px] flex gap-8 items-center text-[25px] justify-between border border-b-1 sticky top-0 bg-white z-10">


      <h1 className="text-purple-500 font-bold logomain">InstaFun</h1>
      <div className="flex gap-5   homebuttons justify-between">
        <Link to={"/"}>
      <IoHomeOutline />
      </Link>
      <DarkMode/>
      <RiAppsLine />
      </div>


      <div className="flex  bg-slate-100 rounded-[10px] items-center searchboxnav gap-2">
      <CiSearch className="text-[100%]"/>
       <input type="text" className="bg-slate-100 w-[100%] rounded-[2px] searchboxnavinput" />
       </div>
     
   
      <div className="flex gap-10 w-[10%] justify-between  messageboxnav">
      <Link to={"/Message"}>
      <MdOutlineMail  />
      </Link>
      </div>
    
      
      <div className="flex gap-10 w-[10%] justify-between  firstbox">
      <IoIosNotificationsOutline className="text-[22px]" />
      </div>
    


      <div className=" flex items-center gap-4 justify-center   profileboxnav 
      ">
      <CgProfile />
      <h1 className=" font-semibold firstbox">Nitin Negi</h1>
      </div>

    </div>
  )
}
