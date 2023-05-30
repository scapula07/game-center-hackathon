import React,{useState} from 'react'
import {BsFillMicFill,BsFillCameraVideoFill} from "react-icons/bs"
import {FaGamepad} from "react-icons/fa"
import { Player } from '@livepeer/react';
import {
  LivepeerConfig,
  createReactClient,
  studioProvider,
} from '@livepeer/react';


export default function LivePlayer({onGoingStreams}) {
  // const [players,setPlayers]=useState([1])
  let count=onGoingStreams.length >1 && "2"
  return (
    <div className='h-4/5  w-full flex flex-col space-y-4  '>
          <div className='h-full flex flex-col w-full rounded-lg ' style={{background:"#212044"}}>
            <div className={`mt-5 lg:mt-[33px] space-y-10 md:space-y-0 md:gap-5 lg:gap-6 grid grid-cols-${count} w-full h-full px-4`}>
                 {onGoingStreams.map((stream)=>{
                     return(
                      <main className='h-full w-full'>
                         <Player
                            title={""}
                            playbackId={""}
                            autoPlay
                       
                         />
                      </main>
                     
                     )
                 })
                 
                 }

            </div>
       

                
          </div>
          <main className='flex items-center space-x-2'>
              <FaGamepad  className='text-3xl text-slate-300'/>
               
               <h5 className='text-xl font-semibold'>Valorant Tournament</h5>
          </main>

    </div>
  )
}
