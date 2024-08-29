import React from 'react'
import FirstChatBox from '../FirstChatBox/FirstChatBox'
import SecondChatBox from '../SecondChatBox/SecondChatBox'
import ThirdChatBox from '../ThirdChatBox/ThirdChatBox'

const ChatBox = () => {
  return (
    <div className='w-[100%]  flex'>
       <FirstChatBox/>
       <SecondChatBox/> 
       <ThirdChatBox/> 

    </div>
  )
}

export default ChatBox