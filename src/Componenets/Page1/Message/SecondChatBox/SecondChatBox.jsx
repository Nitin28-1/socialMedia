import p1 from "../photo/Picture/p3.jpg"
import { IoIosCall } from "react-icons/io";
import { IoIosVideocam } from "react-icons/io";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { CiImageOn } from "react-icons/ci";
import { FaCamera } from "react-icons/fa";
import { MdKeyboardVoice } from "react-icons/md";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import EmojiPicker from "emoji-picker-react"
import { useState } from "react";
import "./SecondChatBox.css"
import { useSelector } from "react-redux";





const SecondChatBox = () => {
  const [open,setopen]=useState(false);
  const [text,settext]=useState();

  const handlemoji=(e)=>
    {
       settext((prev) => prev + e.emoji);
       setopen(prev=>!prev)
    }

    const data = useSelector((state)=>
      {      
          return state.userdetail;
      })

  return (
    <div className='w-[50%] pt-2 flex-col border-r-2'>
        
        <div className="w-[100%] p-3 flex  gap-4 items-center justify-between border-b-2 pb-2">
           
           <div className=" flex gap-4 items-center">
           <img src={data.imgUrl} alt="" className="w-[60px] h-[60px] rounded-[80px] object-cover" />

           <div>
            <h1 className="font-bold">{data.name}</h1>
            <p>GreatFull For Every Suprise In India...</p>
           </div>

           </div>

           <div className="flex text-[40px] gap-5 ">
            <IoIosCall/>
            <IoIosVideocam/>
            <IoIosInformationCircleOutline/>
            
           </div>

        </div>
     
         <div className="w-[100%] flex-1 flex flex-col p-[20px] h-[70vh] border-b-2 gap-6 overflow-scroll">

          <div className="w-[80%] flex gap-3">
               <img src={p1} alt=""  className="w-[60px] h-[60px] rounded-[80px] object-cover" />
               <div className="flex-col gap-4">
               <p className="font-thin bg-green-400 p-1 rounded-[5px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut ipsa voluptatum quod
                 aperiam. Expedita, eos. Commodi reiciendis libero at doloribus.</p>

                <h1 className="font-semibold">1 min ago</h1>
                </div>
          </div>

          <div className="w-[80%] flex self-end	 gap-3">
               
               <div className="flex-col gap-4">
               <p className="font-thin bg-blue-400 p-1 rounded-[5px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut ipsa voluptatum quod
                 aperiam. Expedita, eos. Commodi reiciendis libero at doloribus.</p>

                <h1 className="font-semibold">1 min ago</h1>
                </div>
          </div>

          <div className="w-[80%] flex flex-col self-end	 gap-3">
               
               <img src={p1} alt="" className="w-[300px] self-end h-[200px] object-cover" />
               <div className="flex-col gap-4">
               <p className="font-thin bg-blue-400 p-1 rounded-[5px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut ipsa voluptatum quod
                 aperiam. Expedita, eos. Commodi reiciendis libero at doloribus.</p>

                <h1 className="font-semibold">1 min ago</h1>
                </div>
          </div>
       

         </div>




        <div className="w-[100%] p-3 flex gap-3 justify-between items-center mt-auto">
           <div className="flex  text-[30px] gap-7">
            <CiImageOn/>
            <FaCamera />
            <MdKeyboardVoice />
           </div>

           <input type="text" className="w-[50%] h-[40px] rounded-[10px]" placeholder="Type A Message" 
           value={text}
           onChange={(e)=> settext(e.target.value)}/>

          <div  className="flex relative text-[30px] gap-7 items-center" >
          <div className="absolute mb-[500px]">
           <EmojiPicker open={open} onEmojiClick={handlemoji }/>
           </div>
           <MdOutlineEmojiEmotions  onClick={()=>setopen(prev=>!prev)}/>
          
           <button className="w-[70px]  rounded-[5px] text-[22px] bg-blue-400">Send</button>
           </div>

        </div>


    </div>
  )
}

export default SecondChatBox