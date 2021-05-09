import React, { useEffect } from 'react'
import Scores from './components/Scores'
import {
  LeaderboardDiv,
  BackgroundDiv,
  LeaderboardHeader,
} from './styles'

const Home = () => {
  useEffect(() => {
    document.title = "Leaderboard"
  }, [])
  return (
    <BackgroundDiv>
      <LeaderboardDiv>
        <LeaderboardHeader>Leaderboard</LeaderboardHeader>
        <Scores/>
      </LeaderboardDiv>
    </BackgroundDiv>
  )
}

export default Home
