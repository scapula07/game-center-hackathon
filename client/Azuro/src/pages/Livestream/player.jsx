import React from 'react'
import {BsFillMicFill,BsFillCameraVideoFill} from "react-icons/bs"
import {FaGamepad} from "react-icons/fa"

export default function Player() {
  return (
    <div className='h-3/5  w-full flex flex-col space-y-4'>
          <div className='h-full flex flex-col w-full rounded-lg ' style={{background:"#212044"}}>
              

                
          </div>
          <main className='flex items-center space-x-2'>
              <FaGamepad  className='text-3xl text-slate-300'/>
               
               <h5 className='text-xl font-semibold'>Valorant Tournament</h5>
          </main>

    </div>
  )
}
