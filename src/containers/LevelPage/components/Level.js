import React, { useEffect } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import Sketch from 'react-p5'
import { useHistory } from 'react-router-dom'
import { GET_RANKINGS, ADD_USER } from '../../graphql'
import { boardLimit } from '../'

const Level = ({ level, setEntry }) => {
  const history = useHistory()
  useEffect(() => {
    document.title = `ProSet - ${level}`
  }, [level])
  const { data, error: queryError, loading: queryLoading } = useQuery(GET_RANKINGS, {
    variables: {
      game: "proset",
      level: parseInt(level),
      limit: boardLimit,
    },
    partialRefetch: true,
    onError: error => { return },
    onCompleted: data => { return },
  })
  const [addUser, { data: addData, error: addError, loading: addLoading}] = useMutation(ADD_USER, {
    refetchQueries: [{
      query: GET_RANKINGS,
      variables: {
        game: "proset",
        level: parseInt(level),
        limit: boardLimit,
      }
    }],
    onError: error => { return },
    onCompleted: data => { return },
  })
  
  let n
  const side = 120
  const btwn = 20
  const curve = 5
  const offsetx = 80
  const offsettop = 140
  const offsetbot = 60
  const menusize = offsettop - offsetbot

  let w
  const h = side
  const poses = []
  let row
  let dotsize
  let fst
  let rows
  let colors = []
  let tot

  let cards
  let locs = []

  let resetButton
  let submitButton
  let newButton
  let dropButton
  let numButtons = []
  let buttonWidths
  const buttonHeight = 30
  const buttonTexts = ["New","Deselect","Submit"]
  let buttonCols
  let progressBar
  let timer
  const timerWidth = 127.6
  let promptCount = 0

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(5*side+4*btwn+2*offsetx, 2*side+btwn+offsettop+offsetbot).parent(canvasParentRef)
    startOver(p5)
  }

  const startOver = (p5) => {
    n = parseInt(level)
    w = (n == 5 || n == 6) ? side*5/7 : side
    row = (n > 6) ? 3 : 2
    dotsize = w / (2*row+1)
    fst = Math.ceil((n+1)/2)
    rows = [fst, n+1-fst]
    tot = 2**n
    buttonCols = [p5.color(20,20,240), p5.color(230,0,0), p5.color(0,210,0), p5.color(20,20,240)]
    p5.textSize(17)
    buttonWidths = buttonTexts.map(el => p5.textWidth(el)*1.21+34)
    buttonWidths[3] = 11
    submitButton = new Button(2, p5)
    resetButton = new Button(1, p5)
    newButton = new Button(0, p5)
    dropButton = new Button(3, p5)
    timer = new Timer(menusize/3, menusize/2, p5)
    progressBar = new Progress(2*menusize/3+timerWidth+3,menusize*3/8,submitButton.x-menusize-8-timerWidth,menusize/4, p5)
    for (let i = 4; i < 10; i++) {
      buttonWidths[i] = buttonWidths[3]
      numButtons.push(new Button(i, p5))
      buttonCols.push(p5.color(20,20,240))
    }
    colors = [
      p5.color(255,0,0),
      p5.color(255,255,0),
      p5.color(0,0,255),
      p5.color(0,128,0),
      p5.color(255,0,255),
      p5.color(0,255,0),
      p5.color(0,255,255)
    ]
    colors.push(p5.color(0))
    colors.push(p5.color(255))
    for (let i = 0; i < 9; i++) {
      const r = i % row
      const c = (i - r) / row
      poses.push({r, c})
    }
    if (n > 6) {
      const inds = [0,1,6,2,3,7,4,5,8]
      poses.sort((a,b) => inds[poses.indexOf(a)]-inds[poses.indexOf(b)])
    }
    for (let i = n; i >= 0; i--) {
      const r = (i < fst) ? 0 : 1
      const c = i % fst
      const rlen = rows[r]*(w+btwn) - btwn
      locs.push({x: -rlen/2+c*(w+btwn), y: -h-btwn/2+r*(h+btwn)})
    }
    reset(p5)
  }

  const deselectAll = () => {
    cards.slice(0,n+1).forEach(card => {
      if (!!card && card.selected) {
        card.select()
      }
    })
  }

  const reset = (p5) => {
    cards = []
    for (let i = tot-1; i >0; i--) {
      cards.push(new Card(i.toString(2).padStart(n,'0').split("").map(el => el=="1"), p5))
    }
    for (let i = tot - 2; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const temp = cards[j]
      cards[j] = cards[i]
      cards[i] = temp
    }
    progressBar.reset()
    timer.reset()
    promptCount = 0
  }

  const setVis = on => {
    numButtons.forEach(el => el.visible = on)
  }

  const checkVis = () => {
    if (dropButton.over()) {
      setVis(true)
    } else if (!dropButton.over() && !newButton.over()) {
      setVis(false)
    }
  }

  const checkSet = () => {
    const set = cards.slice(0,n+1).filter(el => !!el && el.selected)
    const dotsTot = set.reduce((acc, el) => el.dots.map((e, ind) => e+acc[ind]), Array(n).fill(0))
    const total = dotsTot.reduce((acc, el) => acc + (el % 2), 0)
    if (total == 0) {
      set.forEach(card => {
        const i = cards.indexOf(card)
        cards[i] = cards[n+1]
        !!cards[i] && cards[i].enter()
        cards.splice(n+1,1)
      })
      progressBar.update(set.length)
      if (progressBar.next == tot-1) {
        timer.end()
      }
    } else {
      set.forEach(card => card.alarm())
    }
  }

  const mousePressed = (p5) => {
    if (!!cards) {
      for (let i = 0; i < n+1; i++) {
        let {x,y} = locs[i]
        x += p5.width/2
        y += p5.height/2+(offsettop-offsetbot)/2
        if (p5.mouseX >= x && p5.mouseX < x+w && p5.mouseY >= y && p5.mouseY < y+h) {
          !!cards[i] && cards[i].select()
        }
      }
      if (resetButton.over()) {
        deselectAll()
      } else if (newButton.over()) {
        if (!dropButton.over()) {
          setVis(false)
          reset(p5)
        } else {
          const overButton = numButtons.reduce((acc, el) => el.over() ? el : acc, null)
          if (!!overButton) {
            setVis(false)
            const newN = overButton.id
            if (newN != n) {
              history.push(`${newN}`)
            } else {
              reset(p5)
            }
          }
        }
      } else if (submitButton.over()) {
        checkSet()
      }
    }
  }

  const draw = (p5) => {
    p5.background(247)
    p5.push()
    p5.fill(210)
    p5.rect(0.5,0.5,p5.width-1,menusize-1)
    if (!!cards) {
      checkVis()
      submitButton.show()
      resetButton.show()
      newButton.show()
      dropButton.show()
      numButtons.forEach(el => el.show())
      progressBar.show()
      timer.show()
      p5.translate(p5.width/2,p5.height/2+(offsettop-offsetbot)/2)
      for (let i = 0; i < n+1; i++) {
        const card = cards[i]
        if (!!card){
          card.show(locs[i])
          card.update()
        }
      }
      if (timer.done) {
        p5.textAlign(p5.CENTER,p5.CENTER)
        p5.textSize(70)
        p5.fill(0)
        p5.textStyle(p5.BOLDITALIC)
        p5.text("Good job!",0,0)
        if (promptCount == 5) {
          let time = timer.getTime().getTime()
          time = Math.floor(time/10)*10
          let newRecord = true
          const boardLength = data.usersBy1.length
          if (boardLength == boardLimit) {
            newRecord = data.usersBy1[boardLimit-1].score1 > time
            console.log(newRecord,time,data.usersBy1)
          }
          if (newRecord) {
            let initials = prompt("You made the leaderboard! Name?")
            initials = !!initials ? initials : "anonymous"
            setEntry({name: initials, score1: time})
            addUser({
              variables: {
                input: {
                  name: initials,
                  game: "proset",
                  level: n,
                  score1: time,
                  score2: 0,
                }
              }
            })
          }
        }
        if (progressBar.t > 0.95) {
          promptCount += 1
        }
      }
    } else {
      startOver(p5)
    }
    p5.pop()
  }

  class Card {

    constructor(dots, p5) {
      this.dots = dots
      this.selected = false
      this.angle = 0
      this.t = 100
      this.dir = p5.random([-1,1])
      this.dir *= p5.random(0.9,1.8)
      this.colort = 1
      this.entert = 0
      this.p5 = p5
    }
  
    select() {
      this.selected = !this.selected
      this.jiggle()
    }
  
    jiggle() {
      this.t = 0
      this.dir = this.p5.random([-1,1])
      this.dir *= this.p5.random(0.9,1.8)
    }
  
    alarm() {
      this.jiggle()
      this.colort = 0
    }
  
    enter() {
      this.entert = 1
    }
  
    update() {
      this.t += 0.3
      this.angle = this.dir*0.1*1.4**(-this.t)*Math.sin(this.t)
      if (this.colort < 1) {
        this.colort += 0.025
      }
      if (this.entert > 0) {
        this.entert -= 0.04
      }
    }
  
    show({x,y}) {
      this.p5.push()
      this.p5.translate(x+w/2,y+h/2)
      this.p5.translate(0,this.p5.lerp(0,h*2+btwn+offsetbot+20,this.entert))
      this.p5.stroke(0)
      this.p5.fill(255)
      this.p5.rotate(this.angle)
      if (this.selected) {
        this.p5.scale(1.05)
        this.p5.strokeWeight(3)
        this.p5.colorMode(this.p5.HSB)
        const from = this.p5.color(5,97,100)
        const to = this.p5.color(120,100,78)
        this.p5.colorMode(this.p5.RGB)
        this.p5.stroke(this.p5.lerpColor(from,to,this.colort))
      }
      this.p5.translate(-w/2,-h/2)
      this.p5.rect(0,0,w,h,curve)
      this.p5.stroke(0)
      this.p5.strokeWeight(1)
      for (let i = 0; i < n; i++) {
        if (this.dots[i]) {
          const {r, c} = poses[i]
          this.p5.fill(colors[i])
          this.p5.ellipse((2*r+1.5)*dotsize,(2*c+1.5)*dotsize,dotsize*1.25)
        }
      }
      this.p5.pop()
    }
  
  }

  class Timer {

    constructor(x,y,p5) {
      this.x = x
      this.y = y
      this.start = Date.now()
      this.p5 = p5
    }
      
    reset() {
      this.start = Date.now()
      this.done = undefined
    }
  
    end() {
      this.done = new Date(Date.now() - this.start)
    }
  
    getTime() {
      return !!this.done ? this.done : new Date(Date.now() - this.start)
    }

    getTimeString() {
      const elapsed = this.getTime()
      return [`${Math.floor(elapsed.getTime()/3600000)}`,`${this.pad(elapsed.getMinutes())}:${this.pad(elapsed.getSeconds())}.${this.pad(Math.floor(elapsed.getMilliseconds()/10))}`]
    }
  
    pad(s) {
      return (s < 10 ? "0" : "") + s
    }
  
    show() {
      this.p5.push()
      const rat0 = 0.55615234375
      const rat1 = 4.17041015625
      const [hrs, rst] = this.getTimeString()
      this.p5.textSize(timerWidth/(rat1+hrs.length*rat0))
      this.p5.translate(this.x+timerWidth-this.p5.textWidth(':00:00.00'),this.y)
      this.p5.fill(0)
      this.p5.textAlign(this.p5.LEFT,this.p5.CENTER)
      this.p5.text(":"+rst,0,0)
      this.p5.textAlign(this.p5.RIGHT,this.p5.CENTER)
      this.p5.text(hrs,0,0)
      this.p5.pop()
    }
  
  }

  class Progress {

    constructor(x,y,w,h,p5) {
      this.x = x
      this.y = y
      this.w = w
      this.h = h
      this.reset()
      this.p5 = p5
    }
  
    reset() {
      this.t = 0
      this.prev = 0
      this.next = 0
    }
  
    update(next) {
      this.t = 0
      this.prev = this.next
      this.next += next
    }
  
    show() {
      if (this.t < 1) {
        this.t += 0.04
      }
      this.p5.push()
      this.p5.translate(this.x,this.y)
      this.p5.fill(255)
      this.p5.rect(0,0,this.w,this.h)
      this.p5.fill(0,200,0)
      this.p5.noStroke()
      this.p5.rect(0.5,0.5,Math.max(this.p5.lerp(this.prev,this.next,this.t)/(tot-1)*this.w-1,0),this.h-1)
      const txt = Math.floor(this.p5.lerp(this.prev,this.next,this.t))+" / "+(tot-1)
      this.p5.fill(0)
      this.p5.textSize(14)
      this.p5.translate(this.w-(this.h-11)/2,this.h/2)
      this.p5.textAlign(this.p5.RIGHT,this.p5.CENTER)
      this.p5.text(txt,0,0)
      this.p5.pop()
    }
  
  }

  class Button {

    constructor(id,p5) {
      this.w = buttonWidths[id]
      if (id > 3) {
        this.w *= 1.7
      }
      this.h = (id < 3) ? buttonHeight : this.w
      this.txt = (id < 3) ? buttonTexts[id] : "" + id
      const upTo = (id < 3) ? id + 1 : 1
      const leftOffset = (id < 3) ? buttonWidths.slice(0,upTo).reduce((acc,el)=>el+acc,0) : 2+this.w
      this.x = p5.width - ((menusize-buttonHeight)/2+5)*upTo - leftOffset
      this.y = menusize/2 - buttonHeight/2 + ((id < 3) ? 0 : 2)
      if (id > 3) {
        this.x -= (1-(id % 2))*(this.w)+0.75
        this.y += (Math.floor((id-2)/2))*(this.h)-this.h+buttonWidths[id]+1.75
      }
      this.id = id
      this.visible = (id < 4)
      this.corners = (id < 4) ? [1,1,1,1] : [id==4,id==5,id==9,id==8]
      this.p5 = p5
    }
  
    over() {
      if (!this.visible) {
        return false
      }
      if (this.id == 3) {
        this.x -= 1
        this.y -= 2
        this.w += 3
        this.h += 3
      }
      let out = this.p5.mouseX >= this.x && this.p5.mouseX < this.x+this.w && this.p5.mouseY >= this.y && this.p5.mouseY < this.y+this.h
      if (this.id == 3) {
        this.x += 1
        this.y += 2
        this.w -= 3
        this.h -= 3
      }
      if (this.id == 3 || this.id == 0) {
        out = numButtons.reduce((acc, el) => acc || el.over(), out)
      }
      return out
    }
    
    show() {
      if (!this.visible) {
        return
      }
      this.p5.push()
      const b = (this.id != 3) ? !this.over() : (
        (this.over() && newButton.over()) || (!this.over() && !newButton.over()) || numButtons[0].visible
      )
      this.p5.fill(b ? buttonCols[this.id] : 255)
      this.p5.stroke(this.id >= 3 ? buttonCols[this.id] : (b ? 0 : buttonCols[this.id]))
      if (this.id != 3) {
        this.p5.strokeWeight(this.id > 3 ? 1.5 : (b ? 1 : 1.5))
      } else {
        this.p5.noStroke()
      }
      this.p5.translate(this.x+this.w/2,this.y+this.h/2)
      this.p5.rectMode(this.p5.CENTER)
      this.p5.rect(0,0,this.w,this.h,...(this.corners.map(el => el*curve*((this.id < 3) ? 0.7 : 0.35))))
      this.p5.noStroke()
      if (this.id != 3) {
        this.p5.textAlign(this.p5.CENTER,this.p5.CENTER)
        this.p5.fill(this.over() ? buttonCols[this.id] : 255)
        this.p5.textSize((this.id < 3) ? 17 : 14)
        this.p5.text(this.txt,0,0)
      } else {
        const s = this.w*0.6
        this.p5.fill(!b ? buttonCols[this.id] : 255)
        this.p5.translate(0,-0.5)
        this.p5.triangle(-s/2,-s/(2*Math.sqrt(3)),s/2,-s/(2*Math.sqrt(3)),0,s/Math.sqrt(3))
      }
      this.p5.pop()
    }
  }

  return (
    <Sketch setup={setup} draw={draw} mousePressed={mousePressed} />
  )
}

export default Level
