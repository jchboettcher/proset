import styled from 'styled-components'

export const BackgroundDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  margin: 0;
  background-color: palegoldenrod;
`

export const StyledInput = styled.input`
  padding: auto;
  margin: auto;
  width: 160px;
`

export const FancyButton = styled.button`
  background: rgb(100,220,100);
  border: black 1px;
  border-style: solid;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
  width: 80px;
  align-self: center;

  &:hover {
    color: white;
    background-color: rgb(10,150,10);
  }
`

// export const FormDiv = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-evenly;
//   /* padding: -10px; */
//   width: 500px;
//   font-family: Arial, Helvetica, sans-serif;
//   position: fixed;
//   top: 3vh;
// `

// export const InputDiv = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   /* padding: -10px; */
//   margin: -5px;
//   /* text-align: center; */
//   font-family: Arial, Helvetica, sans-serif;
// `

export const LeftDiv = styled.div`
  margin: auto;
  align-items: right;
  text-align: right;
  /* border: solid black 2px; */
  width: 225px;
`

export const RightDiv = styled.div`
  margin: auto;
  align-items: left;
  text-align: left;
  /* border: solid black 2px; */
  width: 275px;
`

export const MessageDiv = styled.div`
  text-align: center;
  width: 500px;
`

export const ErrorMsg = styled.p`
  color: red;
  font-size: 15px;
`

export const LoadingMsg = styled.p`
  color: black;
  font-size: 15px;
`