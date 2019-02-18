// HTML struct and CSS style from:
// https://www.timeanddate.com/countdown/create
import React from 'react'
import BGM from './Sad-Violin.mp3'
import './App.css'

const AudioPlayer = props => {
  document.body.addEventListener('click', e => {
    let player = document.getElementById('player')
    player.play()
  })

  return (
    <audio id="player" style={{display:'none'}} src={BGM} autoPlay loop />
  )
}

const TIME_OF_DEATH = '2019/01/23'

const App = props => {
  return (
    <div className="csvg-countdown hasWeeks">
      <AudioPlayer />
      <h1 className="csvg-title font-cursive"
          data-tad-bind="title"
          title="Countdown Timer">RIP <a target="_blank" href="https://G8iker.com" rel="noopener noreferrer">G8iker.com</a></h1>
      <h2 className="font-cursive">From {TIME_OF_DEATH}, has been dead for..</h2>
      <Counter interval={1000} />
      <p>開很久？載入很慢嗎？</p>
      <p>很正常，因為我也『忘了』繳主機費</p>
      <p>所以......</p>
      <p>到底有沒有要花錢請人修啊XD</p>
      <p className="is-alive">復活了嗎？我想應該是不會吧，ㄏㄏ，有活的話再改顏色然後暫停計時就好惹</p>
    </div>
  )
}

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ready: false,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      // m: 0
    }
  }

  componentDidMount(){
    this.setState({ready: true})

    // initialize the state
    this.getDistance()

    // Update by the interval
    setInterval(() => {
      this.getDistance()
    }, this.props.interlval || 1000);
  }

  getDistance() {
    // Set the date we're counting from
    const countFromDate = new Date(TIME_OF_DEATH).getTime();

    // Get todays date and time
    const now = new Date().getTime();

    // Find the distance between now and the date from
    const distance = now - countFromDate;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
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

  render() {
    if (!this.state.ready){
      return(<div>loading</div>)
    }

    return (
      <div>
        <div className="csvg-digit"
            data-tad-bind="days">
          <div className="csvg-digit-number"
              id="el_dw1">
            {this.state.days}
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
            {this.state.hours}
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
            {this.state.minutes}
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
            {this.state.seconds}
          </div>
          <div className="csvg-digit-label"
              id="el_s1t">
            seconds
          </div>
        </div>
      </div>
    )
  }
}

export default App;