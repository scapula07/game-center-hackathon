import React from 'react'

export default function BetBoard() {
  return (
    <div className='py-6'>
        <main className='flex  py-2 px-4 justify-between rounded-lg'  style={{background:"#212044"}} >
            <h5 className='text-sm'>Time</h5>
            <h5 className='text-sm' >Team</h5>
            <h5 className='text-sm'>Tournament</h5>
            <h5 className='text-sm'>Amount</h5>

        </main>

        <div className='h-4/5  py-2  overflow-y-scroll w-full'>
          

        </div>


    </div>
  )
}
