import React from 'react'

const Player=()=>{
    return(
        <div className=' border border-slate-700 h-56 w-full rounded-md'  style={{background:"#212044"}}>

        </div>
    )
}

const Details=()=>{
    return(
        <div className='flex flex-col py-20 space-y-4'>
            <h5>Stream deatails</h5>
          
                <h5>Stream name:Volarant Streamer 1</h5>
                <div className='flex items-center space-x-4 '>
                    <h5>Stream key</h5>
                    <input className='border-b '  style={{background:"#13102e"}}/>
                    <button className='border px-4 py-1 rounded-lg'>Copy</button>

                </div>
                <div className='flex items-center space-x-4 '>
                    <h5>Stream ingest url</h5>
                    <input className='border-b '  placeholder="rtmp://rtmp.livepeer.com/live" style={{background:"#13102e"}}/>
                    <button className='border px-4 py-1 rounded-lg'>Copy</button>

                </div>

          

        </div>
    )
}
export default function StreamDetails() {
  return (
    <div className='flex flex-col'>
         <Player />
         <Details />

    </div>
  )
}
