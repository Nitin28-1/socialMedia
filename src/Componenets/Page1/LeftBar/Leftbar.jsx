import "./Leftbar.css"
import photo1 from "../photo/png1.png"
import photo2 from "../photo/png2.png"
import photo3 from "../photo/png3.png"
import photo4 from "../photo/png4.png"
import photo5 from "../photo/png5.png"
import photo6 from "../photo/png6.png"
import photo7 from "../photo/png7.png"
import photo8 from "../photo/png8.png"
import photo9 from "../photo/png9.png"
import photo10 from "../photo/png10.png"
import photo11 from "../photo/png11.png"
import photo12 from "../photo/png12.png"
import photo13 from "../photo/png13.png"
import photo14 from "../photo/png14.png"
import photo15 from "../photo/png15.png"
import { IoIosAddCircleOutline } from "react-icons/io";
import {
  
  Link,
} from "react-router-dom";



export default function Leftbar() {
  
  const firstbox=[
    {
      img:photo1,
      name:"Nitin Negi",
    },
    
    {
      img:photo2,
      name:"Friends",
    },
    
    {
      img:photo3,
      name:"Groups",
    },
    
    {
      img:photo4,
      name:"MarketPlace",
    },
    
    {
      img:photo5,
      name:"Watch",
    },
    
    {
      img:photo6,
      name:"Members",
    },
  
  ];

  const secondbox=[
    {
      img:photo7,
      name:"Events",
    },
    
    {
      img:photo8,
      name:"Gaming",
    },
    
    {
      img:photo9,
      name:"Gallery",
    },
    {
      img:photo15,
      name:"Videos",
    },
    
    {
      img:photo10,
      name:"Messages",
    },
    
    
  ]

  const thirdbox=[
    {
      img:photo11,
      name:"Fundraise",
    },
    {
      img:photo12,
      name:"Tutorials",
    },
    {
      img:photo13,
      name:"Courses",
    },
    {
      img:photo11,
      name:"Fundraise",
    },
    {
      img:photo12,
      name:"Tutorials",
    },
    {
      img:photo13,
      name:"Courses",
    },
    {
      img:photo11,
      name:"Fundraise",
    },
    {
      img:photo12,
      name:"Tutorials",
    },
    {
      img:photo13,
      name:"Courses",
    },
   
  ]

  return (
    <div className='leftsidebarr w-[18%]  p-5   flex-col gap-3  sticky top-[60px] h-[calc(100vh-60px)] overflow-scroll bg-white flex-shrink-0 '>


     <div className=' flex flex-col gap-3' >
        
        {firstbox.map((value)=>
        
          <div className='flex gap-2 items-center'>
          <img src={value.img} alt=""  className='w-6'/>
          <span className='text-[14px] font-semibold'>{value.name}</span>
        </div>

        )

        }
     </div>
         

      <div className='flex flex-col gap-3 mt-4'>

         <h1 className='text-[17px] font-semibold' >Your Shortcuts</h1>
            
        {secondbox.map((value)=>
        
        <div className='flex gap-2 items-center'>
        <img src={`${value.img}`} alt=""  className='w-6'/>
        <span className='text-[14px] font-semibold'>{value.name}</span>
      </div>

      )

      }
      </div>

      <hr  className=' border h-[0.5px] bg-slate-50 border-slate-400 mt-4'/>

      <div className='flex flex-col gap-2'>
      <h1 className='text-[17px] font-semibold' >Others</h1>

      {thirdbox.map((value)=>
        
        <div className='flex gap-2 items-center'>
        <img src={`${value.img}`} alt=""  className='w-[40px]'/>
        <span className='text-[14px] font-semibold'>{value.name}</span>
      </div>

      )

      }
        


      </div>
    </div>
  )
}
