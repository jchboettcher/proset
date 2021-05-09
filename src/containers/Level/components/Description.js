import React from 'react'
import {
  Subtitle, HowToPara, EmptyDiv
} from '../styles'

const Description = ({
  level,
}) => {
  const nextLevel = parseInt(level)+1
  switch (level) {
    case '1':
      return (
        <>
          <Subtitle>How to play:</Subtitle>
          <HowToPara>
            Ants behave in a very specific way, always in 3 stages. First, all ants modify whether their current square
            has a crumb (shaded in). Second, all ants move forward one square in the direction they are facing.
            Finally, all ants update the direction they are facing. Each ant will continuing moving like this until
            it reaches the picnic location, at which point it stops indefinitely. If an ant moves out of bounds, the entire
            simulation will halt. Otherwise, if eventually all ants reach the picnic location, you win only if there are
            no crumbs left on the grid.
          </HowToPara>
          <HowToPara>
            Click or drag cells to mark or unmark them. When you think you have a solution, hit "Start" to test it. If it's correct,
            you'll pass the level! But if it isn't, hit "Reset" to reset the level. You can also change the speed of the simulation.
          </HowToPara>
          <HowToPara>
            Levels will get more complex as we go on, so we'll introduce new elements as they come up. The first ant we have is
            the green ant. In stage 1, green ants pick up a crumb if there is one and put one down if there isn't. In stage 3,
            green ants turn left if there is a crumb and right if there isn't ("L/R").
          </HowToPara>
          <EmptyDiv/>
          <Subtitle>Summary:</Subtitle>
          <HowToPara>
            <b>Green:</b> flip crumb, L/R
          </HowToPara>
          <EmptyDiv/>
          <Subtitle>
            Go to <a href={`https://jchboettcher.github.io/ants/${nextLevel}`}>next level</a>?
          </Subtitle>
        </>
      )
      break
    case '2':
      return (
        <>
          <Subtitle>New this level:</Subtitle>
          <HowToPara>
            Let's try with multiple ants! (full how-to-play <a href="https://jchboettcher.github.io/ants/1">here</a>)
          </HowToPara>
          <EmptyDiv/>
          <Subtitle>Summary:</Subtitle>
          <HowToPara>
            <b>Green:</b> flip crumb, L/R
          </HowToPara>
          <EmptyDiv/>
          <Subtitle>
            Go to <a href={`https://jchboettcher.github.io/ants/${nextLevel}`}>next level</a>?
          </Subtitle>
        </>
      )
      break
    case '3':
      return (
        <>
          <Subtitle>New this level:</Subtitle>
          <HowToPara>
            Nothing new! (full how-to-play <a href="https://jchboettcher.github.io/ants/1">here</a>)
          </HowToPara>
          <EmptyDiv/>
          <Subtitle>Summary:</Subtitle>
          <HowToPara>
            <b>Green:</b> flip crumb, L/R
          </HowToPara>
          <EmptyDiv/>
          <Subtitle>
            Go to <a href={`https://jchboettcher.github.io/ants/${nextLevel}`}>next level</a>?
          </Subtitle>
        </>
      )
      break
    case '4':
      return (
        <>
          <Subtitle>New this level:</Subtitle>
          <HowToPara>
            Here we introduce red ants. Red ants are exactly the same as green ants except they
            turn the opposite direction in stage 3 ("R/L"). (full how-to-play <a href="https://jchboettcher.github.io/ants/1">here</a>)
          </HowToPara>
          <EmptyDiv/>
          <Subtitle>Summary:</Subtitle>
          <HowToPara>
            <b>Green:</b> flip crumb, L/R
          </HowToPara>
          <HowToPara>
            <b>Red:</b> flip crumb, R/L
          </HowToPara>
          <EmptyDiv/>
          <Subtitle>
            Go to <a href={`https://jchboettcher.github.io/ants/${nextLevel}`}>next level</a>?
          </Subtitle>
        </>
      )
      break
    case '5':
      return (
        <>
          <Subtitle>New this level:</Subtitle>
          <HowToPara>
            Nothing new! (full how-to-play <a href="https://jchboettcher.github.io/ants/1">here</a>)
          </HowToPara>
          <EmptyDiv/>
          <Subtitle>Summary:</Subtitle>
          <HowToPara>
            <b>Green:</b> flip crumb, L/R
          </HowToPara>
          <HowToPara>
            <b>Red:</b> flip crumb, R/L
          </HowToPara>
          <EmptyDiv/>
          <Subtitle>
            Go to <a href={`https://jchboettcher.github.io/ants/${nextLevel}`}>next level</a>?
          </Subtitle>
        </>
      )
      break
    case '6':
      return (
        <>
          <Subtitle>New this level:</Subtitle>
          <HowToPara>
            Here we introduce an entirely new type of ant-- a picnic ant! Picnic ants have a different 
            stopping condition than regular ants. They won't necessarily stop when they land on a picnic location (the 
            level still halts when they go out of bounds though). Instead, picnic ants stop when they land on
            a square with another picnic ant(s) simultaneously. When this happens, they create a new picnic
            location at this square. As such, there need not be an existing picnic location at the beginning
            of a level that has picnic ants. However, if there <i>is</i> an existing picnic location at the start, or
            if there are more than just 2 picnic ants, they all must meet at that same location because in order
            to complete a level, all ants must stop on the same square. Of course, you also still have to end the
            level with no crumbs left. A picnic ant is designated by a dot
            on its middle segment. Colors still work the same way for picnic ants. (full how-to-play <a href="https://jchboettcher.github.io/ants/1">here</a>)
          </HowToPara>
          <EmptyDiv/>
          <Subtitle>Summary:</Subtitle>
          <HowToPara>
            <b>Green:</b> flip crumb, L/R
          </HowToPara>
          <HowToPara>
            <b>Red:</b> flip crumb, R/L
          </HowToPara>
          <HowToPara>
            <b>Dot:</b> picnic ant
          </HowToPara>
          <EmptyDiv/>
          <Subtitle>
            Go to <a href={`https://jchboettcher.github.io/ants/${nextLevel}`}>next level</a>?
          </Subtitle>
        </>
      )
      break
    case '7':
      return (
        <>
          <Subtitle>New this level:</Subtitle>
          <HowToPara>
            Here we introduce a new type of square. Locked squares simply mean that square must be 
            in that state in your initial set up. You cannot toggle whether or not locked squares have crumbs
            at the start. (full how-to-play <a href="https://jchboettcher.github.io/ants/1">here</a>)
          </HowToPara>
          <EmptyDiv/>
          <Subtitle>Summary:</Subtitle>
          <HowToPara>
            <b>Green:</b> flip crumb, L/R
          </HowToPara>
          <HowToPara>
            <b>Red:</b> flip crumb, R/L
          </HowToPara>
          <HowToPara>
            <b>Dot:</b> picnic ant
          </HowToPara>
          <HowToPara>
            <b>Lock:</b> locked square
          </HowToPara>
          <EmptyDiv/>
          <Subtitle>
            Go to <a href={`https://jchboettcher.github.io/ants/${nextLevel}`}>next level</a>?
          </Subtitle>
        </>
      )
      break
    case '8':
      return (
        <>
          <Subtitle>New this level:</Subtitle>
          <HowToPara>
            Three ants! (full how-to-play <a href="https://jchboettcher.github.io/ants/1">here</a>)
          </HowToPara>
          <EmptyDiv/>
          <Subtitle>Summary:</Subtitle>
          <HowToPara>
            <b>Green:</b> flip crumb, L/R
          </HowToPara>
          <HowToPara>
            <b>Red:</b> flip crumb, R/L
          </HowToPara>
          <HowToPara>
            <b>Dot:</b> picnic ant
          </HowToPara>
          <HowToPara>
            <b>Lock:</b> locked square
          </HowToPara>
          <EmptyDiv/>
          <Subtitle>
            Go to <a href={`https://jchboettcher.github.io/ants/${nextLevel}`}>next level</a>?
          </Subtitle>
        </>
      )
      break
    case '9':
      return (
        <>
          <Subtitle>New this level:</Subtitle>
          <HowToPara>
            Here we introduce another variation on ants-- this time in regards
            to stage 1, the crumb modification. Some ants are messier than others! Ants with a black
            third segment will always leave a crumb in its square, and ants with a white third segment
            will never leave a crumb. The main color still determines its direction change in stage 3 of an ant's movement.
            (full how-to-play <a href="https://jchboettcher.github.io/ants/1">here</a>)
          </HowToPara>
          <EmptyDiv/>
          <Subtitle>Summary:</Subtitle>
          <HowToPara>
            <b>Green:</b> flip crumb, L/R
          </HowToPara>
          <HowToPara>
            <b>Red:</b> flip crumb, R/L
          </HowToPara>
          <HowToPara>
            <b>Dot:</b> picnic ant
          </HowToPara>
          <HowToPara>
            <b>Lock:</b> locked square
          </HowToPara>
          <HowToPara>
            <b>Black:</b> always crumb
          </HowToPara>
          <HowToPara>
            <b>White:</b> never crumb
          </HowToPara>
          <EmptyDiv/>
          <Subtitle>
            Go to <a href={`https://jchboettcher.github.io/ants/${nextLevel}`}>next level</a>?
          </Subtitle>
        </>
      )
      break
    case '10':
      return (
        <>
          <Subtitle>New this level:</Subtitle>
          <HowToPara>
            CHALLENGE LEVEL! (full how-to-play <a href="https://jchboettcher.github.io/ants/1">here</a>)
          </HowToPara>
          <EmptyDiv/>
          <Subtitle>Summary:</Subtitle>
          <HowToPara>
            <b>Green:</b> flip crumb, L/R
          </HowToPara>
          <HowToPara>
            <b>Red:</b> flip crumb, R/L
          </HowToPara>
          <HowToPara>
            <b>Dot:</b> picnic ant
          </HowToPara>
          <HowToPara>
            <b>Lock:</b> locked square
          </HowToPara>
          <HowToPara>
            <b>Black:</b> always crumb
          </HowToPara>
          <HowToPara>
            <b>White:</b> never crumb
          </HowToPara>
          <EmptyDiv/>
          <Subtitle>
            More levels coming soon!
          </Subtitle>
        </>
      )
      break
    default: return (<></>)
  }
}

export default Description