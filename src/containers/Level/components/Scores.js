// import React from 'react'
// import { useQuery } from '@apollo/react-hooks'
// import Entry from './Entry'
// import {
//   StyledTable,
//   RankTd,
//   NameTd,
//   PuzzTd,
//   TimeTd,
//   StyledTableBody,
//   StyledTableHead,
// } from '../styles'
// import { ALL_USERS } from '../../graphql'

// const Scores = () => {
//   const { data, error: queryError, loading: queryLoading } = useQuery(ALL_USERS, {
//     partialRefetch: true,
//     onError: error => { return },
//     onCompleted: data => { return },
//   })
//   return (
//     <>
//       <StyledTable>
//         <StyledTableHead>
//           <tr>
//             <RankTd>Rank</RankTd>
//             <NameTd>Username</NameTd>
//             <PuzzTd>Puzzles Solved</PuzzTd>
//             <TimeTd>Time of Last Solve</TimeTd>
//           </tr>
//         </StyledTableHead>
//         <StyledTableBody>
//         {queryLoading || queryError || (
//           data.allUsers.map(entry => (
//             entry ? (
//               <Entry
//                 key={entry.id}
//                 index={data.allUsers.indexOf(entry)}
//                 {...entry}
//               />
//             ) : ''
//           )))}
//         </StyledTableBody>
//       </StyledTable>
//       {queryLoading && <p>Fetching data...</p>}
//       {queryError && <p>Failed to fetch data, try refreshing the page.</p>}
//     </>
//   )
// }

// export default Scores