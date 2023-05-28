import React from 'react'
import Header from '../components/Header'
import NavSideBar from '../components/SideNav'

export default function Layout({children}) {
  return (
    <div className="w-full text-white h-full" style={{background:"#13102e"}}>
   
      <div className='fixed w-full bg-slate-300  lg:py-6 py-4 px-10 z-30 ' style={{background:"#13102e"}}>
      
          <Header />
      </div>

          <div className="flex  w-full px-10 py-20">
           
              <main className='' style={{width:"10%"}}>
                <NavSideBar />
              </main>
           
               <div className="w-full" style={{background:"#13102e"}}>
                  {children}
                </div>
               </div>

       
          </div>
          
    
     


    


  )
}
