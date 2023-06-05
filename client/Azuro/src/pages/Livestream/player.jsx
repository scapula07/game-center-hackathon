import React,{useState} from 'react'
import {BsFillMicFill,BsFillCameraVideoFill} from "react-icons/bs"
import {FaGamepad} from "react-icons/fa"
import { Player } from '@livepeer/react';
import {
  LivepeerConfig,
  createReactClient,
  studioProvider,
} from '@livepeer/react';


export default function LivePlayer({onGoingStreams,game}) {
  // const [players,setPlayers]=useState([1])
  let count=onGoingStreams.length >1 ? "2":"1"
  return (
    <div className='h-4/5  w-full flex flex-col space-y-4  '>
          <div className='h-full flex flex-col w-full rounded-lg ' style={{background:"#212044"}}>
            {onGoingStreams.length >1 ?

            
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
            :
            <main className='w-full h-full relative'>
               <img src={game?.selectedGame?.img} className="w-full h-full"/>

               <div className='absolute h-full w-full top-0 flex items-center justify-center '>
                  <h5 className='text-3xl font-semibold '>Player 1 vs Player 2</h5>

               </div>
            </main>

           }
       

                
          </div>
          <main className='flex items-center space-x-2'>
              <FaGamepad  className='text-3xl text-slate-300'/>
               
               <h5 className='text-xl font-semibold'>Valorant Tournament</h5>
          </main>

    </div>
  )
}
