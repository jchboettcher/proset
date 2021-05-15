import React from 'react'
// import {
//   StyledTd,
// } from '../styles'
import Description from './Description'

const Entry = (props) => {
  // console.log(index,name,score1,boldEntry)
  // const bold = boldEntry.name == name && boldEntry.score1 == score1
  // const data = {
  //   index, name, score1, bold
  // }
  return (
    <>
      {props.index
        ? (
            props.index % 2 ? (
            // <OddEntryDiv>
              <Description {...props} />
            // </OddEntryDiv>
          )
            : (
            //   <EvenEntryDiv>
                <Description {...props} />
            //   </EvenEntryDiv>
            )
        )
        : (
        //   <TopEntryDiv>
            <Description {...props} />
        //   </TopEntryDiv>
        )}
    </>
  )
}

export default Entry
