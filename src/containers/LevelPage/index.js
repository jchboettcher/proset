import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  // LeaderboardDiv,
  BackgroundDiv, CenterDiv, LevelDiv,
  Paragraph, Title, LeaderboardDiv, LeaderboardHeader,
  // LeaderboardHeader,
} from './styles'
import Level from './components/Level'
import Leaderboard from './components/Leaderboard'

export const boardLimit = 25

export const LevelPage = () => {
  const { level } = useParams()
  useEffect(() => {
    document.title = `ProSet - ${level}`
  }, [])
  const [entry, setEntry] = useState({})
  // let won = false
  // if (win && !won) {
  //   won = true
  //   prompt("Initials?")
  // }
  return (
    <CenterDiv>
      <BackgroundDiv>
          <Title>Projective Set</Title>
          <Paragraph>
            <a href="https://en.wikipedia.org/wiki/Projective_Set_(game)">ProSet</a> is a logic game based on the older game <a href="https://en.wikipedia.org/wiki/Set_(game)">Set</a>.
            The goal is to go through the entire deck of cards by identifying "sets" in the current hand.
            Cards form a set when the aggregate number of dots of each color is an even number. Every card is unique: every possible
            card within the appropriate number of dots is in the deck exactly once (except for the trivial blank card).
            When you submit a valid set, those cards will disappear and you'll be dealt new cards to fill their spots. You win when you deplete the whole deck.
          </Paragraph>
          <LevelDiv>
            <Level level={level} setEntry={setEntry} />
            <LeaderboardDiv>
              <LeaderboardHeader>Leaderboard (top 25)</LeaderboardHeader>
              <Leaderboard level={level} boldEntry={entry} />
            </LeaderboardDiv>
          </LevelDiv>
      </BackgroundDiv>
    </CenterDiv>
    // <BackgroundDiv>
    //   <LeaderboardDiv>
    //     <LeaderboardHeader>Leaderboard</LeaderboardHeader>
    //     <Scores/>
    //   </LeaderboardDiv>
    // </BackgroundDiv>
  )
}
