// HTML struct and CSS style from:
// https://www.timeanddate.com/countdown/create
import React from 'react'
import BGM from './Sad-Violin.mp3'
import screenshot from './screenshot.png'
import './App.css'
// const TIME_OF_DEATH = '2019/01/23'
const TIME_OF_DEATH = '2019/01/14'
const COUNTER_INTERVAL = 1000

const AudioPlayer = props => {
  return (
    <div>
      <img id="play-button" src={require('./hand-click.png')} className="hand" width={80} alt="play" />
      <audio id="player" src={props.src} loop autoPlay preload="true"/>
    </div>
  )
}

const CounterView = props =>{
  const { days, hours, minutes, seconds } = props
  return (
    <div>
      <div className="csvg-digit"
          data-tad-bind="days">
        <div className="csvg-digit-number"
            id="el_dw1">
          {days}
        </div>
        <div className="csvg-digit-label"
            id="el_dw1t">
          days
        </div>
      </div>
      <div className="csvg-digit"
          data-tad-bind="hours">
        <div className="csvg-digit-number"
            id="el_h1">
          {hours}
        </div>
        <div className="csvg-digit-label"
            id="el_h1t">
          hours
        </div>
      </div>
      <div className="csvg-digit"
          data-tad-bind="minutes">
        <div className="csvg-digit-number"
            id="el_m1">
          {minutes}
        </div>
        <div className="csvg-digit-label"
            id="el_m1t">
          minutes
        </div>
      </div>
      <div className="csvg-digit"
          data-tad-bind="seconds">
        <div className="csvg-digit-number"
            id="el_s1">
          {seconds}
        </div>
        <div className="csvg-digit-label"
            id="el_s1t">
          seconds
        </div>
      </div>
    </div>
  )
}

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      alive: false,
      // m: 0
    }
  }

  componentDidMount() {
    // initialize the state
    this.getDistance()
    this.checkIfAlive()
    // Update by the interval
    setInterval(() => {
      this.getDistance()
    }, COUNTER_INTERVAL)
  }

  checkIfAlive() {

  }

  getDistance() {
    // Set the date we're counting from
    const countFromDate = new Date(TIME_OF_DEATH).getTime()

    // Get todays date and time
    const now = new Date().getTime()

    // Find the distance between now and the date from
    const distance = now - countFromDate

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)
    // const ms = Math.floor((distance % 1000));
    // const ms = distance
    this.setState({
      days,
      hours,
      minutes,
      seconds,
      // ms
    })
  }

  paperClick() {
    window.gtag('event', 'click paper source')
  }

  render() {
    const { ready } = this.props

    if (!ready) {
      return (<div></div>)
    }

    return (
      <div>
        <h2 className="font-cursive">From time of death, has been gone for..</h2>
        <CounterView {...this.state} />
        <p>開很久？載入很慢嗎？</p>
        <p>很正常，因為我也『忘了』繳主機費</p>
        <p>所以......</p>
        <p>到底有沒有要花錢請人修啊XD</p>
        <p>懶人包: <a onClick={this.paperClick} target="_blank" href="https://goo.gl/dcL5XY" rel="noopener noreferrer">https://goo.gl/dcL5XY</a></p>
        <p className="is-alive">復活了嗎？我想應該是不會吧，ㄏㄏ，有活的話再改顏色然後暫停計時就好惹</p>
      </div>
    )
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ready: false,
    }
  }

  getPlayer() {
    if (!this._player) {
      this._player = document.getElementById('player')
    }
    return this._player
  }

  componentDidMount() {
    this.getPlayer().addEventListener('play', e =>{
      console.log('player: start playing')

      // disable play button
      let playButton = document.getElementById('play-button')
      playButton.style.display = 'none'
      window.gtag('event', 'played')
      this.setState({ready: true})
    })

    document.body.addEventListener('click', e =>{
      this.getPlayer().play()
    })
  }

  render() {
    const { ready } = this.state
    return (
      <div className={`csvg-countdown hasWeeks ready-${ready}`}>
        <AudioPlayer src={BGM} ready={ready}/>
        <img className="screenshot" src={screenshot} alt="black and white screenshot"/>
        <h1 className="csvg-title font-cursive">
          In the memoery of  <a target="_blank" href="https://G8iker.com" rel="noopener noreferrer">G8iker.com</a> <br />
          {/* 2015/10/31 ~ {TIME_OF_DEATH} <br /> */}
          RIP
        </h1>
        <Counter ready={ready}/>
      </div>
    )
  }
}