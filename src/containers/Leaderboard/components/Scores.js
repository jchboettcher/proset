// import React from 'react'
// import { useQuery, useMutation } from '@apollo/react-hooks'
// import Entry from '../../LevelPage/components/Entry'
// import {
//   StyledTable,
//   RankTd,
//   NameTd,
//   PuzzTd,
//   TimeTd,
//   StyledTableBody,
//   StyledTableHead,
// } from '../styles'
// import { GET_RANKINGS, ADD_USER } from '../../graphql'

// const Scores = () => {
//   const { data, error: queryError, loading: queryLoading } = useQuery(GET_RANKINGS, {
//     variables: {
//       game: "non",
//       level: 1,
//       limit: 5,
//     },
//     partialRefetch: true,
//     onError: error => { return },
//     onCompleted: data => { return },
//   })
//   const [addUser, { data: addData, error: addError, loading: addLoading}] = useMutation(ADD_USER, {
//     // update: (client, { data: { addUser: createUser } }) => {
//     //   try {
//     //     const temp = client.readQuery({
//     //       query: GET_RANKINGS,
//     //       variables: {
//     //         game: "non",
//     //         level: 1,
//     //         limit: 5,
//     //       },
//     //     })
//     //     console.log(temp)
//     //     temp.usersBy1 = [...temp.usersBy1, createUser]
//     //     // client.writeQuery({
//     //     //   query: GET_RANKINGS,
//     //     //   variables: {
//     //     //     game: "non",
//     //     //     level: 1,
//     //     //     limit: 5,
//     //     //   },
//     //     //   temp,
//     //     // })
//     //   } catch (err) {
//     //     // eslint-disable-next-line no-console
//     //     console.warn(err)
//     //     throw new Error('author cache failed')
//     //   }
//     // },
//     refetchQueries: [{
//       query: GET_RANKINGS,
//       variables: {
//         game: "non",
//         level: 1,
//         limit: 5,
//       }
//     }],
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
//           data.usersBy1.map(entry => (
//             entry ? (
//               <Entry
//                 key={entry.id}
//                 index={data.usersBy1.indexOf(entry)}
//                 {...entry}
//               />
//             ) : ''
//           )))}
//         </StyledTableBody>
//       </StyledTable>
//       {queryLoading && <p>Fetching data...</p>}
//       {queryError && <p>Failed to fetch data, try refreshing the page.</p>}
//       <button onClick={ () => {
//         addUser({
//           variables: {
//             input: {
//               name: "pnew Me",
//               game: "non",
//               level: 1,
//               score1: -2,
//               score2: 3,
//             }
//           }
//         })
//       }}>click</button>
//     </>
//   )
// }

// export default Scores