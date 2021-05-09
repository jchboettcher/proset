// import React, { useState } from 'react'
// import { useLazyQuery, useMutation } from '@apollo/react-hooks'
// import Input from './Input'
// import { ADD_USER, GET_USER, UPDATE_SCORE } from '../../graphql'
// import {
//   FancyButton, FormDiv,
//   MessageDiv, ErrorMsg, LoadingMsg,
// } from '../styles'

// const Form = () => {
//   const [name, setName] = useState('')
//   const [password, setPass] = useState('')
//   const [exists, setExists] = useState(false)
//   const [auth, setAuth] = useState(false)
//   const [first, setFirst] = useState(true)
//   const [err, setErr] = useState(false)
//   const [user, setUser] = useState({})
//   const [bad, setBad] = useState(false)
//   const [getUser, { data: userData, error: userError, loading: userLoading }] = useLazyQuery(GET_USER, {
//     partialRefetch: true,
//     // skip: true,
//     onError: error => { console.log("getUser",error); setErr(true) },
//     onCompleted: data => {
//       // if (clicked) {
//         // setClicked(false)
//         setExists(!!data.userByName)
//         if (!!data.userByName) {
//           console.log("finished?",!userLoading)
//           console.log("exists?",exists)
//           console.log("found user:", data)
//           setAuth(!!data.userByName)
//           if (!!data.userByName) {
//             console.log(data)
//             setUser(data.userByName)
//           }
//           setFirst(false)
//         } else {
//           console.log("finished?",!userLoading)
//           console.log("exists?",exists)
//           console.log("did not find user:", data)
//           addUser({
//             variables: {
//               input: {
//                 displayName: name,
//                 password,
//               }
//             },
//           })
//         // }
//         // setSkipGet(true)
//       }
//     },
//   })
//   // const [checkPass, { data: passData, error: passError, loading: passLoading }] = useLazyQuery(CHECK_PASS, {
//   //   partialRefetch: true,
//   //   onError: error => { console.log("checkPass",error); setErr(true) },
//   //   onCompleted: data => {
//   //     // if (clicked) {
//   //       setAuth(!!data.checkPass)
//   //       if (!!data.checkPass) {
//   //         console.log(data)
//   //         setUser(data.checkPass)
//   //       }
//   //     // }
//   //   },
//   // })
//   const [addUser, { data: addData, error: addError, loading: addLoading}] = useMutation(ADD_USER, {
//     onError: error => { console.log("addUser",error); setErr(true) },
//     onCompleted: data => {
//       // if (clicked) {
//         setAuth(!!data.addUser)
//         if (!!data.addUser) {
//           console.log(data)
//           setUser(data.addUser)
//         }
//       // }
//       setFirst(false)
//     },
//   })
//   const [updateScore, { data: scoreData, error: scoreError, loading: scoreLoading}] = useMutation(UPDATE_SCORE, {
//     variables: {
//       id: user ? user.id : '',
//       newScore: user ? user.score : 0,
//     },
//     onError: error => { setErr(true) },
//     onCompleted: data => { return },
//   })
//   const loading1 = () => userLoading || addLoading
//   const verifyUsername = () => {
//     const l = name.length
//     if (l < 3 || l > 30) {
//       return false
//     }
//     if (name[0] === ' ' || name[l-1] === ' ') {
//       return false
//     }
//     return (/^[0-9a-zA-Z`~!@#$%^= +\[\]{}\\|;:'",<>./?&*_()-]*$/.test(name))
//   }
//   const buttonClicked = () => {
//     // setClicked(true)
//     console.log("here")
//     console.log("name:",name)
//     console.log("password:",password)
//     if (!verifyUsername()) {
//       setBad(true)
//       return
//     }
//     getUser({
//       variables: {
//         name,
//         password,
//       }
//     })
//   }
//   const handleKeypress = e => {
//     console.log("here3")
//     if (e.code === "Enter" || e.code === "NumpadEnter") {
//       buttonClicked()
//     }
//   }
//   return (
//     <>
//       { !auth ?
//         <FormDiv>
//           <Input
//             label="Username (public)"
//             state={name}
//             setState={name => {
//                 setBad(false)
//                 setName(name)
//               }
//             }
//             onKeyPress={handleKeypress}
//           />
//           <Input
//             label="Password (optional)"
//             state={password}
//             setState={setPass}
//             onKeyPress={handleKeypress}
//           />
//           <FancyButton onClick={buttonClicked}>Sign In</FancyButton>
//           {/* <p>{`${name} ${password}`}</p> */}
//           <MessageDiv>
//             { bad ? <ErrorMsg>{`Username must have 3-30 characters, no leading or trailing spaces, and use only characters and symbols on a standard keyboard.`}</ErrorMsg> :
//               first ||
//               (err ? <ErrorMsg>{`Error loading user, please refresh the page.`}</ErrorMsg> :
//               loading1() ? <LoadingMsg>{`Signing in...`}</LoadingMsg> :
//               auth || <ErrorMsg>{`Incorrect password`}</ErrorMsg>)
//             }
//           </MessageDiv>
//         </FormDiv>
//       : <>
//           <p>{`Welcome${exists ? ' back,' : ','} ${user.displayName}!`}</p>
//           <p>{`Current puzzle: ${user.score + 1}`}</p>
//         </>
//       }
//     </>
//   )
// }

// export default Form
