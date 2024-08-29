import React from 'react'
import {
  
  Link,
} from "react-router-dom";

function Createpost() {
  return (
    <div className='w-[100%] h-[90%] bg-white rounded-[10px] m-2 p-4 flex items-center flex-col gap-5'>
        
        <h1 className='text-[40px] font-semibold'>Create Your Post Here !</h1>

        <div className='w-[100%] flex gap-5 p-4'>
            <h1 className='text-[25px] w-[20%] '>Name :</h1>
            <input type="text" className='border-solid border-2 border-black w-[70%]' />
        </div>

        <div className='w-[100%] flex gap-5 p-4'>
            <h1 className='text-[25px]  w-[20%]'>Description:</h1>
            
             <textarea  rows="5" cols="10" placeholder='Enter Data Here...' className='border-solid border-2 border-black  w-[70%]'>
             
             </textarea>
        </div>

        <div className='w-[100%] flex gap-5 p-4'>
            <h1 className='text-[25px] w-[20%] '>Location :</h1>
            <input type="text" className='border-solid border-2 border-black w-[70%]' />
        </div>

        
        <div className='w-[100%] flex gap-5 p-4'>
            <h1 className='text-[25px] w-[21%] '>Upload Photo :</h1>
            <input type="file" className='w-[70%] text-[20px]'/>
        </div>
          
        <Link to="/">
        <div className='  mb-[70px]'>
          <button className='w-[120px] bg-stone-400 p-2 text-[20px]  font-semibold text-grey'>Publish!</button>
        </div>

        </Link>

       

    </div>
  )
}

export default Createpost;