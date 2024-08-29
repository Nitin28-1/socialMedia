import { SlOptions } from "react-icons/sl";
import { IoVideocamOutline } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import person1 from "../photo/images/person1.jpg"
import { CiSearch } from "react-icons/ci";
import { IoAddCircleOutline } from "react-icons/io5";
import { CiCircleMinus } from "react-icons/ci";
import { useState } from "react";
import p1 from "../photo/Picture/p1.jpg"
import Adduser from "../Adduser/Adduser";


const FirstChatBox = () => {
  
    const [add,setadd]= useState(false);

    
      
  return (<>
    <div className="w-[28%] p-5 flex-col border-r-2 ">
         
         <div className="w-[100%] flex gap-2 items-center justify-between mb-5">
              <img src={data.imgUrl} alt="" className="w-[60px] h-[60px] rounded-[80px]" />
              <h1 className="text-[25px] font-serif font-bold">{data.name}</h1>

              <div className="flex  text-[30px] gap-7 ">
                <SlOptions />
                <IoVideocamOutline/>
                <FaRegEdit/>
              </div>
        </div>

        <div className="w-[100%] mb-3 flex items-center justify-around  ">

            <div className="w-[70%]  flex  items-center  rounded-[10px] bg-slate-500 p-[5px] ">
                
                <CiSearch className="w-[10%] h-[100%]  rounded-l-[10px] text-[30px] bg-slate-500 "/>

                <input type="text" className="w-[90%] h-[100%] bg-slate-500 border-none	outline-none  rounded-r-[10px]	" placeholder="search " />

             </div>
              
              {add  ? <CiCircleMinus className="text-[40px]"             onClick={()=> setadd((prev)=> !prev)} />  :  
               <IoAddCircleOutline className="text-[40px] pointer" onClick={()=> setadd((prev)=> !prev)} />
               }
             

        </div>

        <div className="w-[100%] ">

           <div className="w-[100%] border-b-2 p-3 flex gap-3">
            <img src={p1} alt="" className="w-[60px] h-[60px]  rounded-[80px] object-cover	" />

            <div className="w-[20%]">
            <h1 className="font-bold">Malidia</h1>
            <p>Hi....</p>
            </div>
           </div>


        </div>

       { add && <Adduser /> }


    </div>
       
    </>
  )
}

export default FirstChatBox