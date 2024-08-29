import "./Righbar.css"
import photo20 from "../photo/rpng20.webp"
import p1 from '../photo/Picture/p1.jpg'
import p2 from '../photo/Picture/p2.jpg'
import p3 from '../photo/Picture/p3.jpg'
import p4 from '../photo/Picture/p4.jpg'
import p5 from '../photo/Picture/p5.jpg'


export default function Rightbar() {
 
   const firstbox=[
    {
      img:photo20,
    },
    {
      img:photo20,
    },
   ]

   const secondbox=[
    {
      changes:"Change Photo",
      img:photo20,
    },
    {
      changes:"Liked Photo",
      img:photo20,
      
    },
    {
      changes:"Liked a Comment",
      img:photo20,
      
    }, 
    {
      changes:"Posted",
      img:photo20,
      
    }


   ]

   const thirdbox=[
    
      {
          img:photo20,
      },
      {
          img:photo20,
      },
      {
          img:photo20,
      },
      {
          img:photo20,
      },
      {
          img:photo20,
      },
      {
          img:photo20,
      },
  
   ]


  return (
    <div className='righsidebar p-5  gap-3 sticky top-[60px] h-[calc(100vh-60px)] overflow-scroll flex-shrink-4  '>
      
   
     <div className="flex flex-col gap-4 border p-5 rounded-[5px] border-slate-200 bg-white">

       <h1 className="text-[18px] text-slate-400 font-medium">Suggestion For You</h1> 
       
       {firstbox.map((value)=>
       
       <div className="flex justify-between items-center">
        <div>
       <img src={value.img} alt=""  className="max-w-[60px] rounded-[50%]"/>
       </div>
       <div className="flex gap-4 justify-end">
         <button className="w-[60px] rounded-[2px] bg-purple-400">Follow</button>
         <button className="w-[60px] rounded-[2px] bg-red-500">Dismiss</button>
       </div>
     </div>
       
      )
      }

     </div>

     <div className="flex flex-col gap-4 border p-5 rounded-[5px] border-slate-200 bg-white">
     <h1 className="text-[18px] text-slate-400 font-medium">Latest Activities</h1> 

     {secondbox.map((value)=>

      <div className="flex  items-center justify-between gap-5 ">
        <div>
      <img src={value.img} alt=""  className="w-[60px] rounded-[50%]"/>
      </div>

      <div >
       <span className="text-[15px] font-semibold">Nitin </span>
       <span className="text-[12px] font-normal">{value.changes}</span>
       </div>

       <div >
       <span className="text-[14px]   font-extralight text-slate-400">1 min ago</span>
       </div>
    </div>
    )

     }
     
     </div>



        <div className="flex flex-col gap-4 border p-5 rounded-[5px] border-slate-200 relative bg-white">

      <h1 className="text-[18px] text-slate-400 font-medium">Online Friends</h1> 

      {thirdbox.map((value)=>

      <div className="flex gap-5 items-center relative">
      <div> 
      <img src={value.img} alt=""  className="w-[60px] rounded-[50%]"/>
      </div>

      <div className="w-3 h-3 absolute top-0 left-14    rounded-[10px] bg-green-500" />
      
      <div>
        <h1 className="text-[17px] font-semibold">Nitin</h1>
      </div>
      
       
      </div>

      )
      }

      </div>
        

    </div>
  )
}
