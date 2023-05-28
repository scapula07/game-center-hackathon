import React from 'react'
import Leaderboard from './leaderboard'
import RecentTournament from './RecentTournament'


export default function Tournament() {
  return (
    <div className='h-full py-8 '>
        <Leaderboard />
        <RecentTournament />


    </div>
  )
}
