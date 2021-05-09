import React from 'react'
// import {
//   StyledTd,
// } from '../styles'
import Description from './Description'

const Entry = ({
  index, name, score1, boldEntry
}) => {
  // console.log(index,name,score1,boldEntry)
  const bold = boldEntry.name == name && boldEntry.score1 == score1
  const data = {
    index, name, score1, bold
  }
  return (
    <>
      {index
        ? (
            index % 2 ? (
            // <OddEntryDiv>
              <Description {...data} />
            // </OddEntryDiv>
          )
            : (
            //   <EvenEntryDiv>
                <Description {...data} />
            //   </EvenEntryDiv>
            )
        )
        : (
        //   <TopEntryDiv>
            <Description {...data} />
        //   </TopEntryDiv>
        )}
    </>
  )
}

export default Entry
