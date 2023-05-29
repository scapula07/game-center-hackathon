import React from 'react'
import StreamDetails from './streamDetails'
import LiveChat from './LiveChat'
export default function Gameroom() {
  return (
    <div className='h-screen w-full py-8 flex space-x-10'>
      <div className='w-1/3'>
          <h5 className='font-semibold'>Players leaderboard</h5>

      </div>
         <div className=' w-2/3 '>
            <StreamDetails />

         </div>
        <div className=' w-2/5'>
            <LiveChat />

        </div>
    </div>
  )
}
