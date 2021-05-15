import React from 'react'
import Description from './Description'

const Entry = (props) => (
  <>
    {props.index
      ? (props.index % 2 
        ? (<Description {...props} />)
        : (<Description {...props} />))
      : (<Description {...props} />)}
  </>
)

export default Entry
