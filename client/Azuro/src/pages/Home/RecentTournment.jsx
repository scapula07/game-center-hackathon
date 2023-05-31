import React from 'react'
import tournament1 from "../../assets/img2.png"
import tournament2 from "../../assets/img2.png"
import { Link } from 'react-router-dom'

const TournamentCard=({tournament})=>{
    return(
      <div className='relative '>
        <img src={tournament.img} className=""/>
          <main className='absolute z-20 px-6 h-20 bottom-0 text-white w-full'>
              
                    <div  className='flex items-center justify-between w-full'>
                    <h5 className='text-xl font-semibold flex flex-col'> 
                     <span>{tournament.title}</span> 
                     <span className='text-sm'> Play to win bet </span>
                    </h5>
                    <Link to="/tournaments">
                    <button className='px-8 py-3 font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-700' style={{background:"#1FBDC7"}} >
                        Join
                    </button>
                    </Link>
                    </div>
                 

            
          </main>

      </div>
    )
}
export default function RecentTournment() {
  return (
    <div className=''>
        <main className='overflow-x-scroll w-full py-8'>
            <div className='flex items-center space-x-6 ' style={{width:"120%"}}>
               {[{
                   img:tournament2,
                   title:"Season 1 WagerX Valorant Tournament"
                 },
                 {
                    img:tournament1,
                    title:"Season 1 WagerX Valorant Tournament"
                  },

               ].map((tournament)=>{
                  return(
                     <TournamentCard tournament={tournament}/>
                  )
               })

               }
           

            </div>
         </main>

    </div>
  )
}
