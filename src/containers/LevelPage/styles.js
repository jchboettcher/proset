import styled from 'styled-components'

export const BackgroundDiv = styled.div`
  display: flex;
  flex-direction: column;
  /* margin: 100px; */
  /* background-color: palegoldenrod; */
`

export const LevelDiv = styled.div`
  display: flex;
  flex-direction: row;
`

export const LeaderboardDiv = styled.div`
  padding: 0px 0px 80px 50px;
  display: flex;
  flex-direction: column;
`

export const CenterDiv = styled.div`
  display: flex;
  justify-content: left;
  /* width: 100vw;
  height: 100%; */
  margin-left: 60px;
  margin-right: 60px;
  margin-top: 10px;
`

export const Title = styled.h1`
  font-weight: bold;
  font-size: 40px;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 0;
`

export const Subtitle = styled.h3`
  font-weight: bold;
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 0;
  margin-bottom: 0;
`

export const Paragraph = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  /* margin-top: 10px; */
  margin-bottom: 25px;
`

export const StyledTd = styled.td`
  padding: 6px;
  border: solid;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  border-color: black;
  border-width: 1.5px;
`

export const RankTd = styled(StyledTd)`
  width: 50px;
`

export const NameTd = styled(StyledTd)`
  width: 135px;
`

export const TimeTd = styled(StyledTd)`
  width: 200px;
`

export const StyledTable = styled.table`
  border-collapse: collapse;
  /* margin: 10px; */
`

export const StyledTableBody = styled.tbody`
  background-color: rgb(247,247,247);
`

export const StyledTableHead = styled.thead`
  font-weight: bold;
  /* font-size: 18px; */
  background-color: rgb(210,210,210);
`

export const LeaderboardHeader = styled.h1`
  margin-top: 0px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 24px;
  font-weight: bold;
`