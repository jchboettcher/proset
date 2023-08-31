import React, { useState } from 'react'
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
  Subtitle,
} from '../styles'

const Leaderboard = ({ level, boldEntry, query, queryString, queryLimit, queryName, entry }) => {
  const { data, error: queryError, loading: queryLoading } = useQuery(query, {
    variables : {
      game: "proset",
      level: parseInt(level),
      name: queryName,
      limit: queryLimit,
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
  const count = data => {
    return data[queryString].length
  }
  return (
    <>
      { !!queryName && !queryLoading && !queryError &&
        <Subtitle style={{marginBottom: "13px"}}>{entry.name}: {!!count(data) ? count(data) : 0} submission{(count(data) != 1) ? "s" : ""}</Subtitle>
      }
      <StyledTable>
        <StyledTableHead>
          <tr>
            <RankTd>Rank</RankTd>
            { !queryName && <NameTd id="Name">Name</NameTd> }
            <TimeTd>Time</TimeTd>
            <DateTd>Timestamp (ET)</DateTd>
          </tr>
        </StyledTableHead>
        <StyledTableBody>
        {queryLoading || !!queryError || (
          fixData(data)[queryString].map((entry,idx) => (
            entry ? (
              <Entry
                key={entry.id}
                index={idx}
                queryName={queryName}
                {...entry}
              />
            ) : ''
          )))}
        </StyledTableBody>
      </StyledTable>
      {queryLoading && <Paragraph>Fetching data...</Paragraph>}
      {!!queryError && <Paragraph>Failed to fetch data, try refreshing the page.</Paragraph>}
    </>
  )
}

export default Leaderboard