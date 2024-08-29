import "./Home.css"
import Posts from "../posts/Posts"
import Story from "../story/Story";



export default function Home() {
  return (
    <div className="homepage   p-5 flex flex-col flex-shrink-5 ">
      <Story />
      < Posts />
      
      
      </div>
  )
}
