import React from 'react'
import {FiSearch} from "react-icons/fi"
export default function SearchBar() {
  return (
    <div className='flex bg-purple-900 items-center space-x-3 rounded-full px-4 py-3'  style={{background:"#212044"}}> 
        <FiSearch className='text-purple-700'  style={{color:"white"}}/>
          <input 
          placeholder='Search ...'
          className='bg-purple-900 outline-none border-0 text-xs'   style={{background:"#212044"}} />
        
    </div>
  )
}