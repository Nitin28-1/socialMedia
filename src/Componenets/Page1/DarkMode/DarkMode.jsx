import { MdOutlineDarkMode } from "react-icons/md";
import "./DarkMode.css"

export default function DarkMode() {
   
    const Darkhandler=()=>
    {
        alert("click Ho rha Hai")
        document.querySelector('body').classList.toggle('darkmood');
        console.log("itsk ")
    }

  return (
    <div>
        <MdOutlineDarkMode className="darkmodecss" onClick={Darkhandler} />

    </div>
  )
}
