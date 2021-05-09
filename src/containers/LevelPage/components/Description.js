import React from 'react'
import { RankTd, NameTd, TimeTd } from '../styles'

const Description = ({
  index, name, score1, bold,
}) => {
  const pad = (s) => {
    return (s < 10 ? "0" : "") + s
  }
  const getTimeString = (elapsed) => {
    const hrs = Math.floor(elapsed/3600000)
    elapsed = elapsed % 3600000
    const mns = Math.floor(elapsed/60000)
    elapsed = elapsed % 60000
    const scs = Math.floor(elapsed/1000)
    elapsed = elapsed % 1000
    const mls = Math.floor(elapsed/10)
    return `${hrs}:${pad(mns)}:${pad(scs)}.${pad(mls)}`
  }
  const extraStyle = {}
  const nameStyle = {}
  if (bold) {
    extraStyle.fontWeight = "bold"
    nameStyle.fontWeight = "bold"
  }
  if (name == "anon.") {
    nameStyle.fontStyle = "italic"
  }
  return (
    <tr>
      <RankTd style={extraStyle}>{`${index + 1}`}</RankTd>
      <NameTd style={nameStyle}>{`${name}`}</NameTd>
      <TimeTd style={extraStyle}>{`${getTimeString(score1)}`}</TimeTd>
    </tr>
  )
}

export default Description