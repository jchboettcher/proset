import React from 'react'
import { RankTd, NameTd, TimeTd, DateTd } from '../styles'

const Entry = ({
  index, name, score1, createdAt, bold, queryName,
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
  const getDateString = str => {
    const datePart = str.substring(0,10)
    const timePart = str.substring(11,19)
    const date = new Date(datePart+"T"+timePart+"+00:00")
    const dateStr = date.toLocaleDateString("en-US", {
      timeZone:'America/New_York',
      day:'numeric',
      month:'numeric',
      year:'2-digit',
    })
    const timeStr = date.toLocaleTimeString("en-GB", {
      timeZone:'America/New_York',
      hour:'numeric',
      minute:'numeric',
      second:'numeric',
    })
    return timeStr+', '+dateStr
  }
  const extraStyle = {}
  const nameStyle = {}
  if (bold) {
    extraStyle.fontWeight = "bold"
    nameStyle.fontWeight = "bold"
  }
  if (name == "anonymous") {
    nameStyle.fontStyle = "italic"
  }
  const censoredName = name
    .replace("fuck","f***")
    .replace("fuk","f**")
    .replace("shit","s***")
    .replace("bitch","b****")
    .replace(/^ass$/,"a**")
    .replace(" ass "," a** ")
    .replace(/^ass /,"a** ")
    .replace(/ ass$/," a**")
    .replace("dick","d***")
  return (
    <tr>
      <RankTd style={extraStyle}>{`${index + 1}`}</RankTd>
      { !queryName && <NameTd style={nameStyle}>{`${censoredName}`}</NameTd> }
      <TimeTd style={extraStyle}>{`${getTimeString(score1)}`}</TimeTd>
      <DateTd style={extraStyle}>{`${getDateString(createdAt)}`}</DateTd>
    </tr>
  )
}

export default Entry