import React from 'react'
import {BsEmojiSmile,BsCardImage} from "react-icons/bs"
 


export default function LiveChat() {
  return (
    <div className='px-4 py-2 w-full rounded-lg h-3/4 '  style={{background:"#212044"}}>

       <h5 className='text-sm font-semibold'>Live chat</h5>
       <div className='h-4/5  py-2  overflow-y-scroll w-full'>
          

       </div>
       <div className='flex flex-col '>
          <textarea 
              placeholder='Send message....'
              style={{background:"#212044"}}
              className=""
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
