import React ,{useState,useRef,useEffect}  from 'react'
import { collection, setDoc,doc,getDoc,addDoc} from  'firebase/firestore'
import { Player } from '@livepeer/react';
import {
  LivepeerConfig,
  createReactClient,
  studioProvider,
} from '@livepeer/react';
import { io } from "socket.io-client";

import { useCreateStream } from '@livepeer/react';


const PlayerStream=({stream})=>{
    return(
        <div className=' border border-slate-700 h-56 w-full rounded-md h-full'  style={{background:"#212044"}}>
             <Player 
                 title={stream?.name}
                 playbackId={stream?.playbackId}
                 autoPlay
                 muted
             
             />
        </div>
    )
 }

const Details=({createStream,setStreamName,stream,setStreamer,streamer})=>{
    const socket = useRef();
    useEffect(() => {
        socket.current = io("ws://localhost:5003");
    }, []);
    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
      }
     const createlIveStream=async()=>{
        createStream?.()
        try{
            const docRef = await addDoc(collection(db, "livestreams"), {
         
                streamer:streamer,
                account:"",
              
                date:Number(Date.now()),
        
            });
        }catch(e){
            console.log(e)
        }
    

        socket.current.emit("create stream",{streamName:stream?.name,streamPlaybackId:stream?.playbackId});
     }
    return(
        <div className='flex flex-col py-20 space-y-4'>
            <h5>Stream details</h5>
                <div className='flex items-center space-x-4 '>
                    <h5>Gamer's name</h5>
                    <input className='border-b ' placeholder={""} style={{background:"#13102e"}}
                      onChange={(e)=>setStreamer(e.target.value)}
                    />
                   
                </div>
               {stream?.name?
                <h5>Stream name :{stream?.name}</h5>
                  :
                <div className='flex items-center space-x-4 '>
                    <h5>Stream name</h5>
                    <input className='border-b ' 
                      placeholder={""} 
                      style={{background:"#13102e"}}
                      onChange={(e)=>setStreamName(e.target.value)}
                    />
                    <button className='border px-4 py-2 rounded-lg '
                       onClick={createlIveStream}
                    >Create stream</button>

                </div>
                }
                <div className='flex items-center space-x-4 '>
                    <h5>Stream key</h5>
                    <input className='border-b ' placeholder={stream?.streamKey} style={{background:"#13102e"}}/>
                    <button className='border px-4 py-1 rounded-lg'>Copy</button>

                </div>
                <div className='flex items-center space-x-4 '>
                    <h5>Stream ingest url</h5>
                    <input className='border-b '  placeholder={stream?.rtmpIngestUrl} style={{background:"#13102e"}}/>
                  
                    <button className='border px-4 py-1 rounded-lg'>Copy</button>

                </div>

          

        </div>
    )
}
export default function StreamDetails() {
    const [streamName, setStreamName] = useState('');
    const [streamer, setStreamer] = useState('');
    const {
        mutate: createStream,
        data: stream,
        status,
      } = useCreateStream({ name: streamName });
     
    console.log(stream,"Stream")

  
  return (
    <div className='flex flex-col'>
         <PlayerStream stream={stream}/>
         <Details setStreamName={setStreamName} createStream={createStream} stream={stream} setStreamer={setStreamer} streamer={streamer}/>

    </div>
  )
}
