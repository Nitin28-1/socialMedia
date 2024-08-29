import p1 from "../photo/Picture/p1.jpg"

function Adduser() {
  return (
    <div className="absolute rounded-[5px]  left-[40%] flex flex-col gap-4 w-[20%] bg-gray-300 p-4">
         
         <form className="flex gap-5" >
            <input type="text" className="w-[70%] h-[40px] rounded-[5px]"placeholder="Username" />
            <button className="bg-blue-400 p-1 rounded-[5px] text-[20px]">Send</button>
         </form>

         <div className="flex items-center gap-3 text-[15px] justify-between">

            <div className="flex gap-2 items-center">        
                <img src={p1} alt="" className="w-[50px] h-[50px] object-fill rounded-[50px]" />

            <h1 className="font-serif">Jane Doe</h1>
            </div>


            <button className="bg-blue-400 p-1 rounded-[5px] text-[15px]">Add User</button>
         </div>

    </div>
  )
}

export default Adduser