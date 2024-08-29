
import person1 from "../photo/images/person1.jpg" 
import post1 from "../photo/images/post1.jpg" 
import Post from "./Post"
import p1 from "../photo/Picture/p1.jpg"
import p2 from "../photo/Picture/p2.jpg"
import p3 from "../photo/Picture/p3.jpg"
import p4 from "../photo/Picture/p4.jpg"
import p5 from "../photo/Picture/p5.jpg"


export default function Posts() {
  
  

  const postsdetails=[
    {
      id:1,
      userid: "Nitin Singh",
      desc:"lorem ipsum network is best for you.",
      pimage:person1,
      postimage:post1,
    },
    {
      id:1,
      userid: "Nitin Singh",
      desc:"lorem ipsum network is best for you.",
      pimage:p1,
      postimage:p5,
    },
    {
      id:1,
      userid: "Nitin Singh",
      desc:"lorem ipsum network is best for you.",
      pimage:p2,
      postimage:p4,
    },
    {
      id:1,
      userid: "Nitin Singh",
      desc:"lorem ipsum network is best for you.",
      pimage:p3,
      postimage:p1,
    },
  ]

  return (
    <div className="flex flex-col  w-[100%] gap-4 " >

       {postsdetails.map((value)=>
       
       <Post value={value}></Post>
       )

       }

    
    </div>
  )
}
