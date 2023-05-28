import React from 'react'
import {BsFillGrid3X3GapFill} from "react-icons/bs"
import {TiVideo} from "react-icons/ti"
 import {BsPeople,BsChatDots} from "react-icons/bs"
import {MdPersonOutline,MdOutlineVideoLibrary,MdOutlineLightMode} from "react-icons/md"
import {AiFillHome} from "react-icons/ai"
import {AiOutlineHistory} from "react-icons/ai"
import {RiMoonFill,RiVideoAddFill} from "react-icons/ri"
import {GiTeacher} from "react-icons/gi"


export default function NavSideBar() {
  return (
    <div className='flex  space-y-14 flex-col justify-center fixed '>
         <div>
          
           <div className=' space-y-14 mt-9 flex flex-col justify-center items-center w-full'>
              <main className='bg-rose-900 rounded-full flex justify-center p-2 ' style={{background:"#324fe6"}} >
                 <BsFillGrid3X3GapFill className='text-xl'/>
              </main>

               <main className=' bg-purple-900 py-4 space-y-8 px-4 flex flex-col rounded-full ' style={{background:"#212044"}}>
                  <RiVideoAddFill className='text-2xl' style={{color:"#68708c"}}/>
                  <BsPeople  className='text-2xl' style={{color:"#68708c"}}/>
                  <BsChatDots  className='text-2xl' style={{color:"#68708c"}}/>
                  <GiTeacher  className='text-2xl'  style={{color:"#68708c"}}/>
               </main>

               <main className='flex flex-col  space-y-4'>
                <MdOutlineVideoLibrary  className='text-2xl' style={{color:"#68708c"}}  />
                  <AiOutlineHistory className='text-2xl' style={{color:"#68708c"}}/>
                  <AiFillHome className='text-2xl' style={{color:"#68708c"}}/>
               </main>

           </div>

         </div>

          <div className=' bg-purple-900 py-4 space-y-6 flex flex-col justify-center items-center w-full rounded-full ' style={{background:"#212044"}}>
            <MdOutlineLightMode style={{color:"#68708c"}} />

            <main className='bg-white p-1 rounded-full flex justify-center'>
              <RiMoonFill className='text-rose-900 ' />
            </main>
         </div>

    </div>
  )
}