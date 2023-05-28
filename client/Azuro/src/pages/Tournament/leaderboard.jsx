import React from 'react'



export default function Leaderboard() {
         let count=0
  return (
    <div className='flex justify-center  flex-col items-center'>
        <h5 className='text-xl font-semibold'>LEADERBOARD</h5>

              <div className='flex flex-col overflow-y-scroll h-72 w-4/5 px-8 space-y-4 py-4'>
               {[1,2,3,4,5,6,7,8,9].map(()=>{
                  count++
                  return(
                     <div className='flex items-center  w-full py-2 rounded-lg justify-between px-2  '  >
                        <h5 className='font-bold text-xl w-1/6 flex justify-center '>{count}</h5> 
                          <h5 className='font-bold text-sm w-2/6 flex justify-center' >Username</h5> 
                       <h5 className='font-bold text-sm w-2/5 flex justify-center' >Badge</h5>
                           <h5 className='font-bold text-sm w-2/5 flex justify-center'>Victories/Defects</h5> 
                         <h5 className='font-bold text-sm w-1/6 flex justify-center'>Betting odds</h5> 

                     </div>                  
                     )               
                     })

                   }
           </div>
    </div>
  )
}
