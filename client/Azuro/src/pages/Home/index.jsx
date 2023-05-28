import React from 'react'
import RecentTournment from './RecentTournment'
import TrendingGames from './TrendingGames'
import Feeds from './Feeds'


export default function Home() {
  return (
    <div className=''>
     
        <div className=''>
          <RecentTournment />
          <TrendingGames />
          <Feeds />


        
        </div>


    </div>
  )
}
