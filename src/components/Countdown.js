import React from 'react';
import moment from 'moment'
import Controls from './Controls'

class Countdown extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      duration: this.getRemainingTime(),
      isPaused: false
    }
    this.togglePaused = this.togglePaused.bind(this)
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        duration:this.getRemainingTime()
      })
    },1000)
  }

  componentWillUnmount(){
    clearInterval(this.interval)
  }


  getRemainingTime() {
    let now = moment(),
        newYear = moment({year:now.year()+1}),
        diff = newYear.diff(now)

    return moment.duration(diff)
  }

  togglePaused() {
    this.setState((prevState, props) => {
      const isPaused = !prevState.isPaused
      if(isPaused) {
        clearInterval(this.interval)
      } else {
        this.interval = setInterval(() => {
          this.setState({
            duration:this.getRemainingTime()
          })
        },1000)
    }

    return {
      isPaused
    }
  })
  }

  render() {
      const { duration, isPaused} = this.state
    return (
      <section className="hero is-dark is-bold is-fullheight has-text-centered">
      <div className="hero-body">
        <div className="container">
          <h1 className="title has-text-centered">
            New Year is coming Soon!
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
          </section>
            <Controls isPaused={isPaused} onPausedToggle={this.togglePaused}/>
        </div>
      </div>
      </section>
    );
  }
}

export default Countdown
