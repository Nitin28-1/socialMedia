import p1 from "../photo/Picture/p1.jpg" 
import { CiCircleChevDown } from "react-icons/ci";
import { IoIosArrowDropup } from "react-icons/io";
import { IoMdDownload } from "react-icons/io";
import { useSelector } from "react-redux";

const ThirdChatBox = () => {

    const data = useSelector((state)=>
        {      
            return state.userdetail;
        })

  return (
    <div className='w-[22%] '>

        <div className="w-[100%] p-4 flex flex-col items-center border-b-2 gap-3">
           <img src={data.imgUrl} alt="" className="w-[80px] h-[80px] rounded-[50px] object-cover"/>
           <h1 className="font-semibold">{data.name}</h1>
           <p className="font-thin">GreatFull For Every Sunrise And Sunset</p>

        </div>

        <div className="w-[100%] p-4 flex flex-col gap-4 justify-center">

        <div className=" flex s w-[100%]  text-[20px]  items-center justify-between ">
            <h1 className="font-semibold" >Chat Settings</h1>
            <IoIosArrowDropup  />
        </div>

        <div className=" flex s w-[100%]  text-[20px]  items-center justify-between ">
            <h1 className="font-semibold" >Privacy & Help</h1>
            <IoIosArrowDropup />
        </div>

        <div className=" flex s w-[100%]  text-[20px]  items-center justify-between ">
            <h1 className="font-semibold" >Shared Photos</h1>
            <CiCircleChevDown  />
        </div>

        </div>

        <div className="w-[100%] h-[150px]  overflow-scroll flex flex-col p-4 gap-2 ">
          
          <div className="flex items-center gap-3 justify-between text-[20px]"> 
             <div className="flex gap-3 items-center">
              <img src={p1} alt=""  className="w-[50px] h-[50px] rounded-[10px] object-cover"/>
              <p>photo_2023</p>
              </div>
              <IoMdDownload />
          </div>
          <div className="flex items-center gap-3 justify-between text-[20px]"> 
             <div className="flex gap-3 items-center">
              <img src={p1} alt=""  className="w-[50px] h-[50px] rounded-[10px] object-cover"/>
              <p>photo_2023</p>
              </div>
              <IoMdDownload />
          </div>
        
          <div className="flex items-center gap-3 justify-between text-[20px]"> 
             <div className="flex gap-3 items-center">
              <img src={p1} alt=""  className="w-[50px] h-[50px] rounded-[10px] object-cover"/>
              <p>photo_2023</p>
              </div>
              <IoMdDownload />
          </div>
          <div className="flex items-center gap-3 justify-between text-[20px]"> 
             <div className="flex gap-3 items-center">
              <img src={p1} alt=""  className="w-[50px] h-[50px] rounded-[10px] object-cover"/>
              <p>photo_2023</p>
              </div>
              <IoMdDownload />
          </div>
        

        </div>

        
        <div className="w-[100%] p-5 flex flex-col gap-3 justify-center">

        <div className=" flex s w-[100%]  text-[20px]  items-center justify-between ">
            <h1 className="font-semibold" >Shared Files</h1>
            <IoIosArrowDropup  />
        </div>

        <button className="font-semibold bg-red-500 text-white rounded-[5px] p-2">Block User</button>
        <button className="font-semibold bg-blue-500 text-white rounded-[5px] p-2">Logout</button>

       

        </div>

    </div>
  )
}

export default ThirdChatBox