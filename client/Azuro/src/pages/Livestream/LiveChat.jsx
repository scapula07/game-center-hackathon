import React from 'react'
import {BsEmojiSmile,BsCardImage} from "react-icons/bs"
 


export default function LiveChat({messages,setMessage}) {
  return (
    <div className='px-4 py-1 w-full h-full'>


       <div className='h-4/5  py-2  overflow-y-scroll w-full'>
        {
          messages.map((message)=>{
            return(
              <div className='flex items-center'>
                <img />
                <main className='flex flex-col'>
                  <h5 className='text-slate-400 font-semibold'>
                    {message?.sender}
                  </h5>
                  <h5 className='text-white text-lg font-light'>
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
              className="text-white text-sm "

              onChange={(e)=>setMessage(e.target.value)}
          />
          <main className='flex justify-between py-1'>
              <div className='flex space-x-2 items-center'>
                <BsEmojiSmile />
                <BsCardImage />

              </div>
              <button className='text-sm font-semibold ' style={{color:"#324fe6"}} >
                Send
              </button>

          </main>

       </div>
    </div>
  )
}
