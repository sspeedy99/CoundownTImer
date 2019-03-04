import React from 'react';
import moment from 'moment'
import Controls from './Controls'
import Datepicker from './Datepicker'

class Countdown extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentDate: moment(),
      nextDate: moment({year:moment().year()+1}),
      isPaused: false
    }
    this.togglePaused = this.togglePaused.bind(this)
  }

  componentDidMount() {
    this.resume()
  }

  componentWillUnmount(){
    this.pause()
  }


  getRemainingTime() {
  let {currentDate,nextDate} = this.state,
      diff = nextDate.diff(currentDate)

    return moment.duration(diff)
  }

  togglePaused() {
    this.setState((prevState, props) => {
      const isPaused = !prevState.isPaused
      if(isPaused) {
        this.pause()
      } else {
          this.resume()
    }

    return {
      isPaused
    }
  })
  }

  pause() {
    clearInterval(this.interval)
  }

  resume() {
    this.interval = setInterval(() => {
      this.setState({
        currentDate:moment()
      })
    },1000)
  }

  handleDateReset = nextDate => {
    this.setState({
      nextDate
    })
  }

  render() {
      const { isPaused,nextDate} = this.state,
              duration = this.getRemainingTime()

    return (
      <section className="hero is-dark is-bold is-fullheight has-text-centered">
      <div className="hero-body">
        <div className="container">
          <h1 className="title has-text-centered">
            {nextDate.calendar()} Countdown Timer!
          </h1>
          <section className="section">
                  <nav className="level">
              <div className="level-item ">
                <div>
                  <p className="title">{Math.floor(duration.asDays())}</p>
                  <p className="heading">Days</p>
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div>
                  <p className="title">{duration.hours().toString().padStart(2,"0")}</p>
                  <p className="heading">Hours</p>
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div>
                  <p className="title">{duration.minutes().toString().padStart(2,"0")}</p>
                  <p className="heading">Minutes</p>
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div>
                  <p className="title">{duration.seconds().toString().padStart(2,"0")}</p>
                  <p className="heading">Seconds</p>
                </div>
              </div>
            </nav>
            <Datepicker onDateReset={this.handleDateReset}/>
          </section>
            <Controls isPaused={isPaused} onPausedToggle={this.togglePaused}/>

        </div>
      </div>
      </section>
    );
  }
}

export default Countdown
