import React, { useEffect } from 'react'
import Sketch from 'react-p5'
import gridStrs from '../levels'

const LevelCanvas = ({ level, setWin }) => {
  
  let w
  let h
  let sqsize
  let offright = 22
  let offleft = 22
  let offtop = 95
  let offbottom = 22
  let bWidth = 50.25
  let bHeight = 21

  const gridStr = gridStrs[level-1]

  const grid = []
  let ants = []
  let locked = []

  let started = false
  let killed = false
  let won = false
  let won2 = 0
  let steps = 0
  let painted = 0
  let antCount

  let picnicExists = false
  const picnic = {}

  let currButton = 4
  let fr = 4
  
  const setup = (p5, canvasParentRef) => {
    const reset = () => {
      p5.frameRate(60)
      killed = false
      started = false
      won = false
      won2 = 0
      steps = 0
      painted = 0
      let i = 0
      let j = 0
      let len = gridStr.length
      picnicExists = false
      let dirs = {R: 0, D: 1, L: 2, U:3}
      ants = []
      for (let k = 0; k < len; k++) {
        const c = gridStr[k]
        if (c === "|") {
          j++
          i = -1
        } else if (c === "(") {
          let dir = dirs[gridStr[k+1]]
          // console.log(i,j)
          let typ
          if (gridStr[k+5] === "+") {
            typ = gridStr.substring(k+2,k+6)
            k += 6
          } else {
            typ = gridStr.substring(k+2,k+5)
            k += 5
          }
          ants.push(new Ant(i, j, dir, typ))
        } else if (c === "P") {
          picnicExists = true
          picnic.x = i
          picnic.y = j
        } else if (c === "1") {
          locked.push([i,j,1])
        } else if (c === "2") {
          locked.push([i,j,0])
        }
        i++
      }
      w = i
      h = j + 1
      sqsize = 450/w
      // offsetx = sqsize
      // offsety = sqsize
      for (let i = 0; i < h; i++) {
        grid[i] = new Array(w);
        grid[i].fill(0)
      }
      locked.forEach(([x,y,b]) => {
        grid[y][x] = b
      })
      antCount = ants.length
    }
    reset()
    const start = () => {
      started = true
      p5.frameRate(fr)
    }
    p5.createCanvas(sqsize*w+offright+offleft, sqsize*h+offtop+offbottom).parent(canvasParentRef);
    const buttonTexts = [
      'Start', 'Reset', '0.25x', '0.5x', '1x', '2x', '4x', '8x',
    ]
    const buttons = []
    const buttonFuncs = [
      start, reset, () => {
        buttons[2].style('background-color',p5.color(190))
        buttons[currButton].style('background-color',p5.color(230))
        fr = 1
        currButton = 2
      }, () => {
        buttons[3].style('background-color',p5.color(190))
        buttons[currButton].style('background-color',p5.color(230))
        fr = 2
        currButton = 3
      }, () => {
        buttons[4].style('background-color',p5.color(190))
        buttons[currButton].style('background-color',p5.color(230))
        fr = 4
        currButton = 4
      }, () => {
        buttons[5].style('background-color',p5.color(190))
        buttons[currButton].style('background-color',p5.color(230))
        fr = 8
        currButton = 5
      }, () => {
        buttons[6].style('background-color',p5.color(190))
        buttons[currButton].style('background-color',p5.color(230))
        fr = 16
        currButton = 6
      }, () => {
        buttons[7].style('background-color',p5.color(190))
        buttons[currButton].style('background-color',p5.color(230))
        fr = 32
        currButton = 7
      }
    ]
    // console.log(canvasParentRef)
    // bWidth = (w*sqsize+2)/buttonTexts.length
    for (let i = 0; i < buttonTexts.length; i++) {
      const button = p5.createButton(buttonTexts[i])
      button.parent(canvasParentRef)
      let buttonWidth = bWidth
      if (i < 2) {
        buttonWidth *= 3
      }
      button.size(buttonWidth)
      bHeight = button.height
      let pos
      if (i < 2) {
        pos = p5.width - offright-buttonWidth*2+buttonWidth*i-1
      } else {
        pos = p5.width - offright-buttonWidth*8+buttonWidth*i-1
      }
      button.position(pos,offtop-bHeight-1-(i<2 && bHeight+4))
      button.mousePressed(buttonFuncs[i])
      if (i === 4) {
        button.style('background-color',p5.color(190))
      } else if (i >= 2) {
        button.style('background-color',p5.color(230))
      }
      if (i >= 2) {
        button.style('border-style','none')
        // buttonFuncs.push(setFr(i))
      }
      buttons.push(button)
    }
    // const startButton = p5.createButton('start');
    // startButton.position(p5.width-startButton.width-10, 10);
    // startButton.mousePressed(start);
    // const resetButton = p5.createButton('reset');
    // resetButton.position(p5.width-resetButton.width-10, 20+startButton.height);
    // resetButton.mousePressed(reset);
  }
  
  // const setFr = (i,p5) => {
  //   () => {
  //     buttons[i].style('background-color',p5.color(190))
  //     buttons[currButton].style('background-color',p5.color(230))
  //     p5.frameRate(2**(i-2))
  //   }
  // }
  
  const updateAnts = () => {
    ants.forEach(ant => ant.move())
    ants.forEach(ant => ant.rotate())
  }
  
  const step = () => {
    if (!killed) {
      steps++
      updateAnts()
    }
  }
  
  let mouseInX = -1
  let mouseInY = -1
  let mode = 1
  
  const mousePressed = (p5) => {
    if (!started) {
      if (p5.mouseX > offleft && p5.mouseX < p5.width-offright && p5.mouseY > offtop && p5.mouseY < p5.height - offbottom) {
        mouseInX = Math.floor((p5.mouseX - offleft) / sqsize)
        mouseInY = Math.floor((p5.mouseY - offtop) / sqsize)
        let lock = false
        locked.forEach(([x,y,_]) => {
          lock |= (mouseInX === x && mouseInY === y)
        })
        if (lock) {
          return
        }
        grid[mouseInY][mouseInX] = 1 - grid[mouseInY][mouseInX]
        mode = grid[mouseInY][mouseInX]
        painted += grid[mouseInY][mouseInX]*2-1
      }
    }
  }
  
  const mouseDragged = (p5) => {
    if (!started) {
      if (p5.mouseX > offleft && p5.mouseX < p5.width-offright && p5.mouseY > offtop && p5.mouseY < p5.height - offbottom) {
        const x = Math.floor((p5.mouseX - offleft) / sqsize)
        const y = Math.floor((p5.mouseY - offtop) / sqsize)
        if (mouseInX === x && mouseInY === y) {
          return
        }
        let lock = false
        locked.forEach(([x_,y_,_]) => {
          lock |= (x_ === x && y_ === y)
        })
        if (lock) {
          return
        }
        const prev = grid[y][x]
        grid[y][x] = mode
        painted += mode - prev
        mouseInX = x
        mouseInY = y
      }
    }
  }
  
  const test = () => {
    for (let i = 0; i < antCount; i++) {
      if (!ants[i].picnicAnt) {
        continue
      }
      for (let j = i + 1; j < antCount; j++) {
        if (!ants[j].picnicAnt) {
          continue
        }
        if (ants[i].x === ants[j].x && ants[i].y === ants[j].y) {
          ants[i].stop()
          ants[j].stop()
          if (!picnicExists) {
            picnic.x = ants[i].x
            picnic.y = ants[i].y
            picnicExists = true
          }
        }
      }
    }
    if (picnicExists) {
      let stopCount = 0
      for (let i = 0; i < antCount; i++) {
        if (ants[i].x === picnic.x && ants[i].y === picnic.y) {
          ants[i].stop()
        }
        if (ants[i].stopped) {
          stopCount++
        }
      }
      if (stopCount === antCount) {
        // console.log("killed")
        killed = true
      }
    }
  }

  let winPos = 0
  
  const checkWin = () => {
    let win = true
    for (let i = 0; i < h; i++) {
      win &= grid[i].reduce((acc,el) => (!el) && acc, true)
    }
    ants.forEach(ant => win &= (ant.x === picnic.x && ant.y === picnic.y))
    won = win
    // console.log("this happens once")
    winPos = -200
  }

  const draw = (p5) => {
    p5.background(247)
    p5.push()
    p5.translate(offleft,offtop)
    p5.stroke(0)
    for (let i = 0; i < h; i++) {
      for (let j = 0; j < w; j++) {
        if (!!grid[i][j]) {
          p5.fill(181)
        } else {
          p5.fill(255)
        }
        p5.rect(sqsize*j,sqsize*i,sqsize,sqsize)
      }
    }
    locked.forEach(([x,y,_]) => {
      p5.push()
      p5.translate((x+0.86)*sqsize,(y+0.21)*sqsize)
      p5.scale(sqsize/110)
      p5.rectMode(p5.CENTER)
      p5.fill(0)
      p5.rect(0,0,18,18,4,4,4,4)
      p5.strokeWeight(2)
      p5.noFill()
      p5.arc(0,-12,10,10,p5.PI,0)
      p5.line(-5,-8,-5,-12)
      p5.line(5,-8,5,-12)
      p5.fill(255)
      p5.noStroke()
      p5.beginShape()
      p5.vertex(-3,5)
      p5.vertex(3,5)
      p5.vertex(0,-4)
      p5.endShape(p5.CLOSE)
      p5.ellipse(0,-3,5)
      p5.pop()
    })
    if (picnicExists) {
      p5.push()
      p5.translate((picnic.x+0.5)*sqsize,(picnic.y+0.54)*sqsize)
      p5.scale(sqsize/40)
      p5.rectMode(p5.CENTER)
      p5.fill(254,184,102)
      p5.stroke(0)
      p5.strokeWeight(1)
      p5.rect(0,-4.5,16,11,4,4,4,4)
      p5.fill(255-grid[picnic.y][picnic.x]*74)
      p5.rect(0,-4.5,12,7,2,2,2,2)
      p5.fill(254,184,102)
      p5.beginShape()
      p5.vertex(-8,7)
      p5.vertex(8,7)
      p5.vertex(10,-3)
      p5.vertex(-10,-3)
      p5.endShape(p5.CLOSE)
      p5.fill(254,95,103)
      // p5.strokeWeight(1)
      p5.line(-6,4.4,-4,4.4)
      p5.line(6,4.4,4,4.4)
      p5.line(-1,4.4,1,4.4)
      p5.line(-2.7,2,-4.7,2)
      p5.line(2.7,2,4.7,2)
      p5.line(-7,-0.4,-5,-0.4)
      p5.line(7,-0.4,5,-0.4)
      p5.translate(0,0.5)
      p5.beginShape()
      p5.vertex(0,3)
      p5.vertex(2,1)
      p5.vertex(0,-1)
      p5.vertex(-2,1)
      p5.endShape(p5.CLOSE)
      p5.beginShape()
      p5.vertex(-6.5,-3.5)
      p5.vertex(-4,-1)
      p5.vertex(-1.5,-3.5)
      p5.endShape(p5.CLOSE)
      p5.beginShape()
      p5.vertex(-2.5,-3.5)
      p5.vertex(-0,-1)
      p5.vertex(2.5,-3.5)
      p5.endShape(p5.CLOSE)
      p5.beginShape()
      p5.vertex(6.5,-3.5)
      p5.vertex(4,-1)
      p5.vertex(1.5,-3.5)
      p5.endShape(p5.CLOSE)
      p5.fill(255)
      p5.beginShape()
      p5.vertex(-4,-1)
      p5.vertex(-2,-3)
      p5.vertex(0,-1)
      p5.vertex(-2,1)
      p5.endShape(p5.CLOSE)
      p5.beginShape()
      p5.vertex(4,-1)
      p5.vertex(2,-3)
      p5.vertex(0,-1)
      p5.vertex(2,1)
      p5.endShape(p5.CLOSE)
      p5.pop()
    }
    ants.forEach(ant => ant.show(p5))
    if (started && !killed) {
      step()
    }
    if (!killed) {
      test()
    }
    if (killed && won2 < 5) {
      won2++
    }
    if (won2 === 3) {
      p5.frameRate(60)
    }
    if (killed && won2 < 2) {
      checkWin()
    }
    p5.fill(255)
    p5.noStroke()
    // p5.rect(0,-2*bHeight,2*bWidth-1,bHeight-1)
    // p5.rect(0,-bHeight,2*bWidth-1,bHeight-1)
    p5.fill(0)
    p5.push()
    p5.textSize(16)
    p5.text(`Steps: ${steps}`,0,-bHeight-11)
    p5.text(`Crumbs: ${painted}`,0,-10)
    p5.textSize(28)
    p5.text(`Level ${level}`,0,-2*bHeight-15)
    p5.pop()
    // console.log(killed)
    if (killed) {
      p5.push()
      if (winPos < p5.height - h*sqsize/4-14) {
        winPos += 10;
      }
      p5.translate(w*sqsize/2,p5.height - winPos)
      p5.fill(won ? p5.color(0,230,0,230) : p5.color(250,40,0,230))
      p5.stroke(0)
      p5.strokeWeight(2)
      p5.rectMode(p5.CENTER)
      // console.log(w*sqsize/2)
      p5.rect(0,0,315,90)
      p5.textSize(30)
      p5.fill(0)
      p5.strokeWeight(0)
      p5.textAlign(p5.CENTER,p5.CENTER)
      p5.text(won ? "You passed!" : "Try again?",0,0)
      // p5.point(w*sqsize/2,h*sqsize/2)
      p5.pop()
    }
    p5.pop()
  }

  class Ant {

    constructor(x, y, dir, type) {
      this.x = x;
      this.y = y;
      this.dir = dir;
      this.type = type;
      this.xmoves = [1,0,-1,0]
      this.ymoves = [0,1,0,-1]
      this.stopped = false
      this.picnicAnt = !!this.type[3]
      // this.colors = [color(0,255,0),color(255,0,0),color(0,0,255)]
    }
  
    stop() {
      this.stopped = true
    }
  
    move() {
      if (this.stopped) {
        return
      }
      const flip = this.type[2]
  
      // flip
      switch (flip) {
        case 'F':
          grid[this.y][this.x] = 1 - grid[this.y][this.x]
          painted += grid[this.y][this.x]*2-1
          // needFlip.push([this.y,this.x])
          // painted -= grid[this.y][this.x]*2-1
          break
        case 'W':
          painted -= grid[this.y][this.x]
          grid[this.y][this.x] = 0
          // if (!!grid[this.y][this.x]) {
          //   needFlip.push([this.y,this.x])
          // }
          break
        case 'B':
          painted += 1 - grid[this.y][this.x]
          grid[this.y][this.x] = 1
          // if (!grid[this.y][this.x]) {
          //   needFlip.push([this.y,this.x])
          // }
          break
      }
  
      this.x += this.xmoves[this.dir]
      this.y += this.ymoves[this.dir]
      if (this.x >= w || this.x < 0 || this.y >= h || this.y < 0) {
        this.stopped = true
        killed = true
      }
    }
  
    rotate() {
      if (this.stopped) {
        return
      }
      const whiteMove = this.type[0]
      const blackMove = this.type[1]
  
      const actualMove = !grid[this.y][this.x] ? whiteMove : blackMove
      const moveIncs = {R: 1, L: 3, S: 0, U: 2}
  
      this.dir = (this.dir + moveIncs[actualMove]) % 4
    }
  
    show(p5) {
      // if (this.x >= w || this.x < 0 || this.y >= h || this.y < 0) {
      //   return
      // }
      p5.push()
      p5.translate((this.x+0.5)*sqsize,(this.y+0.5)*sqsize)
      p5.rotate(this.dir*p5.HALF_PI)
      p5.stroke(0)
      p5.strokeWeight(0.5)
      if (this.type[0] === 'L' && this.type[1] === 'R') {
        p5.fill(255,0,0)
      }
      if (this.type[1] === 'L' && this.type[0] === 'R') {
        p5.fill(0,255,0)
      }
      p5.scale(sqsize/20)
      // scale(10)
      p5.ellipse(-1,0,3.5)
      p5.ellipse(2.5,0,3.5)
      p5.push()
      if (this.type[2] === 'B') {
        p5.fill(0)
      } else if (this.type[2] === 'W') {
        p5.fill(255)
      }
      p5.ellipse(-4.5,0,3.5)
      p5.pop()
      p5.noFill()
      p5.beginShape();
      p5.vertex(4.2, 0.5);
      p5.vertex(4.2, 0.5);
      p5.curveVertex(5,0.8);
      p5.vertex(6,2)
      p5.vertex(6,2)
      p5.endShape();
      p5.beginShape();
      p5.vertex(4.2, -0.5);
      p5.vertex(4.2, -0.5);
      p5.curveVertex(5,-0.8);
      p5.vertex(6,-2)
      p5.vertex(6,-2)
      p5.endShape();
      p5.fill(0)
      if (this.picnicAnt) {
        p5.ellipse(-1,0,1)
      }
      p5.pop()
    }
  }

  return (
    <Sketch setup={setup} draw={draw} mousePressed={mousePressed} mouseDragged={mouseDragged} />
    // <BackgroundDiv>
    //   <LeaderboardDiv>
    //     <LeaderboardHeader>Leaderboard</LeaderboardHeader>
    //     <Scores/>
    //   </LeaderboardDiv>
    // </BackgroundDiv>
  )
}

export default LevelCanvas
