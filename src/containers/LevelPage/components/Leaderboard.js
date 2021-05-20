import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import Entry from './Entry'
import {
  StyledTable,
  RankTd,
  NameTd,
  TimeTd,
  DateTd,
  StyledTableBody,
  StyledTableHead,
  Paragraph,
} from '../styles'
import { GET_RANKINGS, GET_RECENT } from '../../graphql'
import { boardLimit, recentLimit } from '../'

const Leaderboard = ({ level, boldEntry, recent }) => {
  const query = !!recent ? GET_RECENT : GET_RANKINGS
  const queryString = !!recent ? "recentUsersBy1" : "usersBy1"
  const { data, error: queryError, loading: queryLoading } = useQuery(query, {
    variables : {
      game: "proset",
      level: parseInt(level),
      limit: !!recent ? recentLimit : boardLimit,
      time: 86400000,
    },
    partialRefetch: true,
    onError: error => { return },
    onCompleted: data => { return },
  })
  const fixData = data => {
    let maxInd = null
    for (let i = 0; i < data[queryString].length; i++) {
      const entry = data[queryString][i]
      if (!!entry) {
        entry.bold = false
      }
      if (!!entry && !!boldEntry && boldEntry.name == entry.name && boldEntry.score1 == entry.score1) {
        maxInd = i
      }
    }
    if (maxInd != null) {
      data[queryString][maxInd].bold = true
    }
    return data
  }
  return (
    <>
      <StyledTable>
        <StyledTableHead>
          <tr>
            <RankTd>Rank</RankTd>
            <NameTd id="Name">Name</NameTd>
            <TimeTd>Time</TimeTd>
            <DateTd>Timestamp (ET)</DateTd>
          </tr>
        </StyledTableHead>
        <StyledTableBody>
        {queryLoading || queryError || (
          fixData(data)[queryString].map(entry => (
            entry ? (
              <Entry
                key={entry.id}
                index={data[queryString].indexOf(entry)}
                {...entry}
              />
            ) : ''
          )))}
        </StyledTableBody>
      </StyledTable>
      {queryLoading && <Paragraph>Fetching data...</Paragraph>}
      {queryError && <Paragraph>Failed to fetch data, try refreshing the page.</Paragraph>}
    </>
  )
}

export default Leaderboard