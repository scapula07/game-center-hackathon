import React ,{useState}from 'react'
import {CiGrid2H} from "react-icons/ci"
import game from "../../assets/valorant.jpeg"
import Modal from '../../components/Modal'
import {AiOutlineClose} from "react-icons/ai"

const Grid=()=>{
    const [trigger,setTrigger] =useState(false)
    return(
        <>
        <div className="mt-5 lg:mt-[33px] space-y-10 md:space-y-0 md:gap-5 lg:gap-6 md:grid grid-cols-2 lg:grid-cols-3 ">
            {[1,2,3,4,5,6,7].map(()=>{
                 return(
                    <>
                    <div className='flex flex-col space-y-1 rounded-xl shadow-xl hover:shadow-blue-700' onClick={()=>setTrigger(true)}> 
                       
                       
                       <img src={game}/>
                       

                       <main className='flex flex-col py-2 space-y-1 px-4'>
                          <h5 className='text-slate-300 text-xs'>Total bets:$10000</h5>
                          <h5 className='text-sm font-semibold'>Valorant</h5>
                        
                          <h5 className='text-xs '>Live(ongoing)</h5>

                       </main>

                    </div>
                   
                    </>
                 )
              })
 
            }
          
        </div>
           <Modal trigger={trigger} cname="w-3/5 shadow rounded-lg   z-30 relative bg-color " >
                <div className='w-full relative' style={{height:"500px"}}>
                        <main className='flex justify-end px-8 absolute z-10 bottom-0 py-4'>
                            <button onClick={()=>setTrigger(false)}><AiOutlineClose className="text-3xl text-white hover:text-2xl" /></button>
                        </main>
                          <div className='w-full '>
                            <div className='relative'>
                               <img src={game} className="w-full h-60 "/>
                                <div className='absolute z-20 bottom-0 py-4 right-0 px-4'>
                                        <button className='px-6 py-2  rounded-xl font-semibold hover:shadow-blue-700  hover:shadow-lg' style={{background:"#1FBDC7"}} >
                                        Play
                                        </button>

                                 </div>
                            </div>
                            <div className='px-4 py-6'>
                                <div className='flex py-4 items-center space-x-4'>
                                     <h5 className='text-xs font-semibold text-slate-400'>24k viewers</h5>
                                     <h5 className='text-xs font-semibold'>Live(ongoing)</h5>

                                </div>
                                <p className='text-xs font-semibold'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                                    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                                    obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                                    nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                                    tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                                    quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
                                    sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
                                    recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
                                    minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 

                                </p>

                            </div>

                         </div>

                    

                </div>

          </Modal>

        
        </>
    )
}

export default function RecentTournament() {
  return (
    <div className='w-full flex flex-col items-center py-10'>
        <div className='w-4/5'>
            <div className='flex items-center justify-between'>  
                <h5 className='text-lg font-semibold'>Tournaments</h5>
                <CiGrid2H className='text-xl font-semibold' />

            </div>
             
             <Grid />



         </div>
       

    </div>
  )
}
