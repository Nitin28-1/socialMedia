import person1 from "../photo/images/person1.jpg" 
import post1 from "../photo/images/person.jpg" 

export default function Commentss() {
  
  const comments=[
    {
      id:1,
      name:"nitin",
      pimge:person1,
      desc:"Loreme ja gy tu kha hai technology yeah tho copy paste hai",
      
    },
    {
      id:1,
      name:"nitin",
      pimge:person1,
      desc:"Loreme ja gy tu kha hai technology yeah tho copy paste hai",

    },
    {
      id:1,
      name:"nitin",
      pimge:person1,
      desc:"Loreme ja gy tu kha hai technology yeah tho copy paste hai",

    },
    {
      id:1,
      name:"nitin",
      pimge:person1,
      desc:"Loreme ja gy tu kha hai technology yeah tho copy paste hai",

    }
  ]

  return (
    <div className='flex flex-col w-[100%] gap-6 p-3 '>

       <div className='flex gap-5 items-center'>
        <img src={post1} alt="" className='w-[50px] h-[50px] rounded-[50%]' />
        <input type="text" placeholder='Write your Comment Here' className='w-[800px] h-10 border border-solid-10px border-slate-200 placeholder:pl-5' />
        <button className='bg-purple-400 w-[80px] h-8 text-white'>Send</button>
       </div>

       {comments.map((value)=>
         <div className='flex  gap-4 justify-arround '>


         <div >
           <img src={value.pimge} alt="" className='w-[40px] h-[40px] rounded-[50%]'/>
   
           </div>
 
           <div className=' w-[80%]' >
           <p className='font-semibold'>Nitin</p>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur perferendis tenetur illum nesciunt, itaque nisi, nostrum consequatur saepe reprehenderit assumenda obcaecati ea adipisci aliquid, ex neque fuga quia numquam repellat?</p>
 
           </div>
 
         <div className='flex items-center'>
          <p>1 min ago</p>
         </div>
          
        </div> 
      )

       }


    </div>
  )
}
