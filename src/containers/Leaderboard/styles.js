import styled from 'styled-components'

export const BackgroundDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  margin: 0;
  background-color: palegoldenrod;
`

export const LeaderboardDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 10px;
  /* border: rgba(40,40,40,0.5) 4px; */
  /* border-style: solid; */
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  position: fixed;
  top: 2vh;
  /* background-color: rgba(108,128,150,0.8); */
  /* animation: color-change 40s infinite;
  position: center;
  @keyframes color-change {
    0% { background-color: rgba(100,128,150,0.8); }
    20% { background-color: rgba(128,128,100,0.8); }
    40% { background-color: rgba(100,128,128,0.8); }
    60% { background-color: rgba(150,100,128,0.8); }
    80% { background-color: rgba(128,150,100,0.8); }
    100% { background-color: rgba(108,128,150,0.8); }
  } */
`

export const StyledTd = styled.td`
  padding: 20px;
  border: solid;
  border-color: palegoldenrod;
  border-width: 5px;
`

export const RankTd = styled(StyledTd)`
  width: 52px;
`

export const NameTd = styled(StyledTd)`
  width: 185px;
`

export const PuzzTd = styled(StyledTd)`
  width: 140px;
`

export const TimeTd = styled(StyledTd)`
  width: 200px;
`

export const StyledTable = styled.table`
  border-collapse: collapse;
  /* margin: 10px; */
`

export const StyledTableBody = styled.tbody`
  background-color: rgb(10,150,10);
`

export const StyledTableHead = styled.thead`
  font-weight: bold;
  font-size: 18px;
  background-color: rgb(10,120,10);
`

export const LeaderboardHeader = styled.h1`
  font-weight: bold;
  font-size: 45px;
`