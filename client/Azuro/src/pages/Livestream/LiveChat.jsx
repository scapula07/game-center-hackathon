import React,{useRef,useState,useEffect} from 'react'
import {BsEmojiSmile,BsCardImage} from "react-icons/bs"

 


export default function LiveChat({messages,setMessage,sendMessage,chatBox}) {
   console.log(messages.length,"iii")
   const [chats,setChat]=useState([])
   useEffect(()=>{
    setChat(messages)
   },[messages.length])
  return (
    <div className='px-4 py-1 w-full h-full'>


       <div className='h-4/5  py-2 flex flex-col space-y-4  overflow-y-scroll w-full' ref={chatBox}>
        {
          chats.map((message)=>{
            return(
              <div className='flex items-center'>
                <img />
                <main className='flex flex-col space-y-0.5'>
                  <h5 className='text-slate-400 font-semibold text-xs'>
                    {message?.sender.slice(0,7) + "..." + message?.sender.slice(-4) }
                  </h5>
                  <h5 className='text-slate-200  text-lg font-light text-sm'>
                     {message?.message}
                  </h5>

                </main>
              </div>
            )
          })
        }
          

       </div>
       <div className='flex flex-col '>
          <textarea 
              placeholder='Send message....'
              style={{background:"#212044"}}
              className="text-white text-xs outline-none "

              onChange={(e)=>setMessage(e.target.value)}
          />
          <main className='flex justify-between py-1'>
              <div className='flex space-x-2 items-center'>
                <BsEmojiSmile />
                <BsCardImage />

              </div>
              <button className='text-sm font-semibold ' style={{color:"#324fe6"}} 
                onClick={sendMessage}
              >
                Send
              </button>

          </main>

       </div>
    </div>
  )
}
