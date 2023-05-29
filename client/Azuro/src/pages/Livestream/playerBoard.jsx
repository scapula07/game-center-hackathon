import React from 'react'

export default function PlayerBoard({bets}) {
    console.log(bets)
  return (
    <div className='px-4 py-2 w-full h-full'>
      <div className='h-4/5  py-2  overflow-y-scroll w-full flex flex-col space-y-4 items-center'>
          <div className='flex items-center space-x-8 text-slate-400 text-sm font-semibold '>
              <h5>Bettor</h5> 
              <h5>Choice</h5>
              <h5>Amount</h5>

          </div>
          {bets?.map((bet)=>{
             return(
              <div className='flex items-center space-x-8 text-sm font-light'>
                  <h5>{bet.bettor}</h5>
                  <h5>{bet.choiceOfPlayer}</h5>
                 <h5>{bet.amount}</h5>



                 
              </div>
             )
          })

          }
       

       </div>
   
   </div>
  )
}
