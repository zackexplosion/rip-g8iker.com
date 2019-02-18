import React from 'react'
import './App.css'
const TIMER_INTERVAL = 1000

class App extends React.Component {
  constructor(props) {
    super(props);
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
    }, TIMER_INTERVAL);
  }

  getDistance() {
    // Set the date we're counting from
    const countFromDate = new Date("2019/01/22").getTime();

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
      <div className="csvg-countdown hasWeeks">
        <h1 className="csvg-title font-cursive"
            data-tad-bind="title"
            title="Countdown Timer">RIP <a target="_blank" href="https://G8iker.com" rel="noopener noreferrer">G8iker.com</a></h1>
        <h2 className="font-cursive">From 2019/01/22, has dead for..</h2>
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
        <p>開很久？載入很慢嗎？很正常，因為我也『沒付錢』</p>
        <p className="is-alive">復活了嗎？我想應該是不會吧，ㄏㄏ，有活的話再改顏色跟暫停計時就好惹</p>
       </div>
    )
  }
}

export default App;