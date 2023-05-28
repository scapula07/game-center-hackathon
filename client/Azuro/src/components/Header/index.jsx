import React from 'react'
import {BiSearch,BiNotification} from "react-icons/bi"
import {BsCartFill} from "react-icons/bs"
import {AiOutlineHeart} from "react-icons/ai"
import SearchBar from '../SearchBar'
import ConnectWallet from '../connectWallet'

export default function Header() {
  return (
    <div className=' w-full '>
          <div className='flex w-full items-center justify-between'>
              <main>
                  <h5 className='text-xl font-semibold' style={{color:"#68708c"}}>WagerX</h5>
              </main>
              <main className='flex items-center space-x-6 '>
                 <h5 style={{color:"#68708c"}}>Tournaments</h5>
                 <h5 style={{color:"#68708c"}}>Live Bets</h5>
                 <BiNotification  style={{color:"#68708c"}}/>
               <SearchBar />


             </main>
             <main className='flex items-center'>
                 {/* <button className='text-white px-4 py-2 rounded'>Signup</button>
                 <button>Login</button> */}
                 <ConnectWallet />

             </main>

         </div>
  

    </div>
  )
}
