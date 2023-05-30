import React,{useState,useRef,useEffect} from 'react'
import contractAbi from "../../ContractAbi/gameBetting.json"
import { useRecoilValue } from 'recoil'
import { AccountState } from '../../recoil/globalState'
import BetBoard from './BetBoard'
import LiveChat from './LiveChat'
import PlayerBoard from './playerBoard'
import {IoMdChatboxes} from "react-icons/io"
import {MdLeaderboard} from "react-icons/md"
import BetModal from '../../components/BetModal'
import {AiOutlineClose} from "react-icons/ai"
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../../firebase'
import LivePlayer from "./player"
import { usePrepareContractWrite,useContractWrite ,useWaitForTransaction,} from 'wagmi'
import { io } from "socket.io-client";
import { useAccount } from 'wagmi'

export default function LiveStreaming() {
  
  const { isConnected ,address} = useAccount();

   const [leaderboard,setboard]=useState(false)
   const [trigger,setTrigger] =useState(false)
   const [betAmount,setAmount]=useState()
   const [betChoice,setChoice]=useState()
   const [bets,setBets]=useState([])
   const [messages,setMessages]=useState([])
   const [message,setMessage]=useState([])
   const [onGoingStreams,setStreams]=useState([])
  
   const socket = useRef();
  
   const { config } = usePrepareContractWrite({
      address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
      abi:contractAbi,
      functionName: 'placeBet',
  })

  const { write ,data} = useContractWrite(config)

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  })

   useEffect(() => {
    const betArray=[]
    const liveMessages=[]
    const onGoingStreams=[]
    socket.current = io("ws://localhost:5003");
    socket.current.on("place bet", (data) => {
      console.log(data,"datata")
      betArray.push(data)
      setBets(betArray)
   
     });

     socket.current.on("live chat", (data) => {
      console.log(data,"datata")
      liveMessages.push(data)
      setMessages(liveMessages)
   
     });
     socket.current.on("create stream", (data) => {
      console.log(data,"streams")
      onGoingStreams.push(data)
      setStreams(onGoingStreams)
   
     });

     }, []);

   console.log(bets)

   console.log(data,isLoading, isSuccess,"txxx")

   const placeBet=async()=>{

   
      write?.({
        args: [69],
        from: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
        value: parseEther('0.01'),
       })

    const bet={
       amount:betAmount,
       choiceOfPlayer:betChoice,
       bettor:address,
       date:new Date()
     }
    socket.current.emit("place bet",bet);
    // socket.current.emit("live chat",{sender:address,message:message});


    try{
      const docRef = await addDoc(collection(db, "bets"),bet);
       
     }catch(e){
        console.log(e)
      }
  
    setTrigger(false)
   }

   const sendMessage=async()=>{

   }

  return (
    <>
    <div className='h-screen py-8' >
          <div className='flex w-full h-full space-x-10'>
              <main className='h-screen rounded-md flex flex-col overflow-y-scroll'  style={{width:"65%"}}>
                <div className='' style={{height:"120%"}}>
                  <LivePlayer onGoingStreams={onGoingStreams}/>
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
                          <PlayerBoard bets={bets}/>
                          :
                          <LiveChat messages={messages} setMessage={setMessage} sendMessage={sendMessage}/>

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

                <div className='flex flex-col py-6 space-y-4 w-full'>
                  <main className='flex items-center space-x-4 justify-center'>
                    <h5 className='text-slate-700'>Gamers</h5>
                      <select className='text-black  w-1/4 outline-none text-sm py-1 rounded-md' 
                         onChange={(e)=>setChoice(e.target.value)}
                      >
                            <option value={betChoice}  >
                                <h5>John   (Odds:1.12)</h5>
                              </option>
                              <option  >
                                <h5>John(Odds:1.12)</h5>
                              </option>
                        </select>
                  </main>
              
                    <input 
                       placeholder='Minimum bet($20)'
                       className='rounded-md px-4 py-6 h-6 text-slate-700' 
                       value={betAmount}
                       onChange={(e)=>setAmount(e.target.value)}
                    />
                    <main className='w-full'>
                       <button onClick={placeBet} className="w-full py-2 rounded-md"  style={{background:"#324fe6"}}>Place bet</button>
                    </main>

                </div>

         </div>

       </BetModal>
    </>
  )
}
