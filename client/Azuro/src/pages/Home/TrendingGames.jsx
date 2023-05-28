import React from 'react'
import {BsFire} from "react-icons/bs"
import game from "../../assets/valorant.jpeg"
import {BsFillPlayFill} from "react-icons/bs"


export default function TrendingGames() {
  return (
    <div className='py-20 w-full '>
        <main className='flex items-center w-full justify-center'>
           <h5 className='text-xl font-semibold'>Currently Trending Games</h5>
           {/* <button className='px-6 py-1 rounded-lg text-sm' style={{background:"#68708c"}}>See all</button> */}

        </main>

        <div className='flex items-center space-x-20 justify-center py-6'>
            {[1,2,3,4,4].map(()=>{
                return(
                    <div className='flex flex-col'>
                         <main className='h-28 relative w-24 rounded-lg '>
                            <img src={game } className="h-full w-full rounded-lg"/>
                            <div className='absolute h-full w-full hover:z-10 top-0 hover:bg-blue-700 hover:opacity-70 rounded-lg flex items-center justify-center hover:text-white' >
                                <BsFillPlayFill className='text-2xl font-semibold '/>
                            </div>
                             
                         </main>
                         <main className='flex flex-col py-2 space-y-2'>
                            <h5>Valorant</h5>
                            <h5 className='flex items-center'>
                                <BsFire className='text-sm  ' />
                                <span className='text-slate-700 text-xs'>13k viewers</span>
                               
                            </h5>
                            <button className='rounded-lg px-3 py-1.5  text-slate-700 text-xs border' style={{borderColor:"#324fe6"}}>
                                    Join now
                        </button>

                         </main>
                    </div>
                )
            })

            }

        </div>



   </div>
  )
}
