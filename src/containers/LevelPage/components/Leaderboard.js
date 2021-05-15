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
import { GET_RANKINGS } from '../../graphql'
import { boardLimit } from '../'

const Leaderboard = ({ level, boldEntry }) => {
  const { data, error: queryError, loading: queryLoading } = useQuery(GET_RANKINGS, {
    variables: {
      game: "proset",
      level: parseInt(level),
      limit: boardLimit,
    },
    partialRefetch: true,
    onError: error => { return },
    onCompleted: data => { return },
  })
  const fixData = data => {
    let maxInd = null
    console.log(boldEntry)
    for (let i = 0; i < data.usersBy1.length; i++) {
      const entry = data.usersBy1[i]
      console.log(entry)
      if (!!entry) {
        entry.bold = false
      }
      if (!!entry && !!boldEntry && boldEntry.name == entry.name && boldEntry.score1 == entry.score1) {
        maxInd = i
      }
    }
    console.log(maxInd)
    if (maxInd != null) {
      data.usersBy1[maxInd].bold = true
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
          fixData(data).usersBy1.map(entry => (
            entry ? (
              <Entry
                key={entry.id}
                index={data.usersBy1.indexOf(entry)}
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