import React from 'react'
import StreamDetails from './streamDetails'
import LiveChat from './LiveChat'
export default function Gameroom() {
  return (
    <div className='h-screen w-full py-8 flex space-x-10'>
         <div className=' w-1/3 '>
            <StreamDetails />

         </div>
        <div className=' w-2/4'>
            <LiveChat />

        </div>
    </div>
  )
}
