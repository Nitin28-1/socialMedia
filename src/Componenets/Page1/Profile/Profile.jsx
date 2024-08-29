import "./Profile.css"
import profile from "../photo/images/mountain.jpg" 
import profile1 from "../photo/images/profileback.webp" 
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import { MdOutlineMessage } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import Posts from "../posts/Posts";





export default function Profile() {
  return (
    <div className="flex firstprofilebox flex-col gap-4">

        <div className="flex flex-col gap-4 relative ">
          <img src={profile} alt=""  className=""/>
           
          <div className="flex flex-col gap-5 bg-white p-3 ml-2 items-center  rounded-[10px] justify-center relative">
          
          <div className="relative w-[150px] h-[40px] ">
          <img src={profile1} alt=""  className="w-[150px] h-[150px] rounded-[50%] absolute bottom-1"/>
          </div>

          <div>
            <p className="text-[25px] font-semibold">Nitin</p>
          </div>

          <div className="flex secondprofilebox  items-center w-[100%] justify-evenly">


            <div className=" flex gap-5 w-[40%]  text-[20px]">
             < FaFacebook/>
             < FaInstagram/>
             < FaTwitter/>
             < FaLinkedin/>
             < FaPinterest/>


            </div>

            <div className="flex gap-5 text-[20px]">
              <div className="flex items-center">
              <IoLocation/>
              <p>India</p>
              </div>

              <div className="flex items-center ">
                <TbWorld/>
                <p>Punjab</p>
              </div>

            </div>
            

            <div className="thirdprofilebox flex text-[20px] w-[40%]  gap-5
            ">
            <MdOutlineMessage/>
            <BsThreeDotsVertical/>


            </div>



          </div>
              
          <button className="w-[80px] bg-purple-500 p-3 text-white text-[16px] font-semibold mb-5">Follow</button>


          </div>
           

        </div>
         
         <div className="ml-2">
       < Posts  />
       </div>

        

    </div>
  )
}
