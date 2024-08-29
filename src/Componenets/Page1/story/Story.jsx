import React from 'react'
import person from "../photo/images/person.jpg"
import person1 from "../photo/images/person1.jpg"
import "./story.css"
import p1 from "../photo/Picture/p1.jpg"
import p2 from "../photo/Picture/p2.jpg"
import p3 from "../photo/Picture/p3.jpg"
import p4 from "../photo/Picture/p4.jpg"
import p5 from "../photo/Picture/p5.jpg"

export default function Story() {

   const stories=[
    {
        id:1,
        name: "Nitin",
        img: person,
    },
    {
        id:2,
        name: "Nitin",
        img: p1,
    }
    , {
        id:3,
        name: "Nitin",
        img: p2,
    }
    , {
        id:4,
        name: "Nitin",
        img: p3,
    }
    , {
        id:3,
        name: "Nitin",
        img: p4,
    }
    , {
        id:4,
        name: "Nitin",
        img: p5,
    }
    
    
   ]



  return (
    <div  className='flex gap-3 overflow-scroll flex-grow-3   p-4 topstorydiv '>

      <div className='relative min-w-[150px]   firstboxx'>
      <img src={person1} alt=""  className=' h-[200px] rounded-[10px] firstboxx'/>

      <span className='absolute bottom-1 ml-2 text-white font-semibold'>Nitin</span>

      <button className='text-[30px] w-[40px] h-[40px] absolute  bg-purple-400 text-white font-bold rounded-[50%] bottom-9 ml-2 flex justify-center items-center'>+</button>
      </div>
    

        {
          stories.map((story)=>
          <div className='relative min-w-[150px]  secondbox'>
          <img src={`${story.img}`} alt=""  className='secondbox h-[200px] rounded-[10px]'/>
          <span className='absolute bottom-1 ml-2 text-white font-semibold'>{story.name}</span>
  
        </div>
        )
        }
        </div>
   

  
  )
}
