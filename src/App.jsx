import { useEffect, useState } from 'react'
import './App.css'
import Layout from './Componenets/Layout/Layout'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import Login from './Componenets/Login/Login.jsx';
import Register from './Componenets/Register/Register.jsx';
import Home from './Componenets/Page1/Home/Home.jsx';
import Navbar from './Componenets/Page1/Navbar/Navbar.jsx';
import Leftbar from './Componenets/Page1/LeftBar/Leftbar.jsx';
import Rightbar from './Componenets/Page1/Rightbar/Rightbar.jsx';
import Profile from './Componenets/Page1/Profile/Profile.jsx';
import { Message } from './Componenets/Page1/Message/Message.jsx';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Componenets/Page1/Firebase/Firebase.jsx';
import { UseUserStore } from './Componenets/Page1/Zustand/UseUserStore.jsx';
import LoadingC from './Componenets/LoadingC/LoadingC.jsx';

function App() {
  

  const [currentstate,setcuurentstate]=useState(true);
  const {fetchuserinfo,isloading,currentuser}=UseUserStore(); 
    
  useEffect(()=>
    {
      const unsub=onAuthStateChanged(auth,(user)=>{
        console.log("Chal Kyu nhi Rha Hai");
        fetchuserinfo(user.uid)
      })
  
  
      return ()=>
        {
          unsub();
        }
    },[fetchuserinfo]);

  const Forntlayout=()=>
  {
     

     return (<>
        {isloading ? <div >
                <Navbar />
                <div className='flex '>
                 <Leftbar />
                 <div className='w-[60%] centerdiv'>
                 <Outlet />
                 </div>
                 <Rightbar/>
                </div>
            </div>  :

             <Login />
    }
       
      
             
     </>
     )
  
  }
  
  const SaveRouter=({children})=>
  {
     if(currentstate == false)
     {
      return <Navigate to="/Register" />;
  
     }
  
     return children;
  };
  
  
  const router = createBrowserRouter([
   {
    path: "/",
    element:(<SaveRouter> <Forntlayout/> </SaveRouter>) ,
    children:[
      {
        path: "/",
        element:<Home />
      },
      {
        path: "/profile/:id",
        element: <Profile/>,
      },
    ] 
  
    },
   
    {
      path: "/Login",
      element: <Login />,
    },
    {
      path: "/Register",
      element: <Register />,
    },
    {
      path: "/Message",
      element: <Message />,
    },
    
  ]);
  
  return (
    <>
     <RouterProvider router={router} />

    </>
  )
}

export default App
