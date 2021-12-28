import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  BackgroundDiv, CenterDiv, BodyDiv, EmptyDiv, Subtitle,
  Paragraph, Title, LeaderboardDiv, LeaderboardHeader, LeftDiv, UnderDiv,
} from './styles'
import Level from './components/Level'
import Leaderboard from './components/Leaderboard'
import { GET_RANKINGS, GET_RECENT, GET_TOP, GET_USER } from '../graphql'

export const boardLimit = 250
export const recentLimit = 10
export const topLimit = 50

export const LevelPage = () => {
  const { level } = useParams()
  const [entry, setEntry] = useState({})
  return (
    <CenterDiv>
      <BackgroundDiv>
          <Title>Projective Set</Title>
          <Subtitle>(<a href="https://github.com/jchboettcher/proset">source code</a>)</Subtitle>
          <Paragraph>
            <a href="https://en.wikipedia.org/wiki/Projective_Set_(game)">ProSet</a> is a logic game based on the older game <a href="https://en.wikipedia.org/wiki/Set_(game)">Set</a>.
            Normally, you play against other players live, but in this single player version, you race against the clock instead.
            You're still racing against other players though, let's see if you can make the leaderboard!
            The goal is to go through the entire deck of cards by identifying "sets" in the current hand.
            Cards form a set when the aggregate number of dots of each color is an even number. Every card is unique: every possible
            card within the appropriate number of dots is in the deck exactly once (except for the trivial blank card).
            When you submit a valid set, those cards will disappear and you'll be dealt new cards to fill their spots. You win when you deplete the whole deck.
          </Paragraph>
          <BodyDiv>
            <LeftDiv style={{paddingBottom: "0"}}>
              <Level level={level} entry={entry} setEntry={setEntry} />
              <EmptyDiv/>
              <UnderDiv>
                <LeftDiv>
                  <LeaderboardHeader>{`All Time (top ${boardLimit})`}</LeaderboardHeader>
                  <Leaderboard level={level} boldEntry={entry} query={GET_RANKINGS} queryString="usersBy1" queryLimit={boardLimit}/>
                </LeftDiv>
                { entry.name && <LeftDiv style={{marginLeft: "60px"}}>
                  <LeaderboardHeader style={{marginBottom: "2px"}}>{`Personal Records`}</LeaderboardHeader>
                  <Leaderboard level={level} boldEntry={entry} query={GET_USER} queryString="userByName1" queryName={entry.name} entry={entry} />
                </LeftDiv> }
              </UnderDiv>
            </LeftDiv>
            <LeaderboardDiv>
              <LeaderboardHeader>{`Last 24 Hours (top ${recentLimit})`}</LeaderboardHeader>
              <Leaderboard level={level} boldEntry={entry} query={GET_RECENT} queryString="recentUsersBy1" queryLimit={recentLimit} />
              <EmptyDiv/>
              <LeaderboardHeader>{`User Personal Bests (top ${topLimit})`}</LeaderboardHeader>
              <Leaderboard level={level} boldEntry={entry} query={GET_TOP} queryString="topUsersBy1" queryLimit={topLimit} />
            </LeaderboardDiv>
          </BodyDiv>
      </BackgroundDiv>
    </CenterDiv>
  )
}
