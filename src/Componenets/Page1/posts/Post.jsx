import { BsThreeDots } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { LiaCommentSolid } from "react-icons/lia";
import { IoShareSocial } from "react-icons/io5";
import Comments from "../comments/Commentss";
import { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
  Link,
} from "react-router-dom";
import "./posts.css"


export default function Post({value}) {

    const [commenton,setcommenton]=useState(false);

  return (
    <div className="w-[100%] bg-white rounded-[10px]">

    <div className="flex p-3 justify-between">

     <Link to="/profile/:id">
      <div className="flex gap-4">
      <img src={value.pimage} alt=""  className="w-[50px] h-[50px] rounded-[50%]"/>

      <div>
      <p className="font-semibold">Nitin</p>
      <p className="text-[15px] font-normal">a few month ago</p>
      </div>
   
      </div>
      </Link>
      <BsThreeDots className="text-[20px]"/>
    </div>

    <div className="p-3 flex flex-col gap-3">
     
     <p className="font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, enim?</p>

     <img src={value.postimage} alt="" className="w-[800px] h-[500px]" />
    </div>

    <div className="flex p-3  gap-5">
       <div className="flex gap-3 items-center ">
       <AiOutlineLike className="text-[20px]"/>
       <p className="font-semibold">Likes</p>
       </div>

       <div className="flex gap-3 items-center ">
       <LiaCommentSolid className="text-[20px]"
        onClick={()=> setcommenton(!commenton) }  />
       <p className="font-semibold">Comments</p>
       </div>

       <div className="flex gap-3 items-center ">
       <IoShareSocial className="text-[20px]"/>
       <p className="font-semibold">Share</p>
       </div>
    </div>
    { commenton &&  <Comments />}
  

  </div>
  )
}
