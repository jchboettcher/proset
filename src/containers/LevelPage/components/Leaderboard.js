import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import Entry from './Entry'
import {
  StyledTable,
  RankTd,
  NameTd,
  TimeTd,
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
  return (
    <>
      <StyledTable>
        <StyledTableHead>
          <tr>
            <RankTd>Rank</RankTd>
            <NameTd>Name</NameTd>
            <TimeTd>Time</TimeTd>
          </tr>
        </StyledTableHead>
        <StyledTableBody>
        {queryLoading || queryError || (
          data.usersBy1.map(entry => (
            entry ? (
              <Entry
                key={entry.id}
                index={data.usersBy1.indexOf(entry)}
                boldEntry={boldEntry}
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