import React,{useState,useRef,useEffect} from 'react'
import Player from './player'
import BetBoard from './BetBoard'
import LiveChat from './LiveChat'
import PlayerBoard from './playerBoard'
import {IoMdChatboxes} from "react-icons/io"
import {MdLeaderboard} from "react-icons/md"
import BetModal from '../../components/BetModal'
import {AiOutlineClose} from "react-icons/ai"
import { io } from "socket.io-client";

export default function LiveStreaming() {


   const [leaderboard,setboard]=useState(false)
   const [trigger,setTrigger] =useState(false)
   const socket = useRef();
  

   useEffect(() => {
    socket.current = io("ws://localhost:5003");

     }, []);


   const placeBet=async()=>{
    socket.current.emit("place bet", {
      bettor: "john",
   
    });

   }


  return (
    <>
    <div className='h-screen py-8' >
          <div className='flex w-full h-full space-x-10'>
              <main className='h-screen rounded-md flex flex-col overflow-y-scroll'  style={{width:"65%"}}>
                <div className='' style={{height:"120%"}}>
                  <Player />
                  <BetBoard />
                </div>

              </main>
              <main className='w-1/4 flex-col flex space-y-4 h-full space-y-10 overflow-y-scroll' style={{width:"35%"}} >
                   <div className='h-4/5 w-full rounded-md pb-6' style={{background:"#212044"}}>
                       <main className='flex items-center px-4 py-3 justify-center '>
                         {leaderboard?
                           <h5 className='w-4/5 text-center'>Statistics</h5>
                              :
                           <h5 className='w-4/5 text-center'>Live chat</h5>
                           }
                           {leaderboard?
                           
                              
                            < IoMdChatboxes className='text-xl font-semibold' onClick={()=>setboard(false)}/>
                              :
                            < MdLeaderboard className='text-xl font-semibold' onClick={()=>setboard(true)}/>
                           }
                       </main>
                       {leaderboard?
                          <PlayerBoard />
                          :
                          <LiveChat />

                       }
                      
                  </div>
                    <div  className='h-1/5 w-full rounded-md px-4 py-4' >
                       <h5 className='text-red-700'>Total Bets:$100</h5>
                       <div className='w-full py-4'>
                   
                       <button className='w-full py-2 rounded-md' style={{background:"#324fe6"}} onClick={()=>setTrigger(true)}>Place Bet</button>
                       </div>
                   </div>

              </main>



          </div>

    </div>
       <BetModal trigger={trigger} cname="h-56 w-1/3 shadow rounded-lg py-4 px-8 z-30 relative bg-color">
         <div>
              <main className='flex justify-end'>
                 <button onClick={()=>setTrigger(false)}><AiOutlineClose className="text-md text-black" /></button>
                </main>

                <div className='flex flex-col'>
                    <select>
                        <option>John</option>
                    </select>
                    <input placeholder='Minimum bet($20)'/>
                    <main>
                       <button onClick={placeBet}>Place bet</button>
                    </main>

                </div>

         </div>

       </BetModal>
    </>
  )
}
