import React from 'react'
import moment from 'moment'

class Datepicker extends React.Component {
  state = {
    date:""
  }

  handleDateChange(event) {
    this.setState({
      date:event.target.value
    })
  }

  handleDateSubmit(event) {
    event.preventDefault();
    console.log(this.state.date)

    this.props.onDateReset(moment(this.state.date))
  }

  render() {
      const {date} = this.state
    return (
      <form onSubmit = {this.handleDateSubmit.bind(this)}>
        <div className="field is-grouped is-grouped-centered" style ={{marginTop:40}}>
            <p className="control">
              <input className="input is-rounded is-medium is-outlined" value={date} onChange={this.handleDateChange.bind(this)} placeholder="Insert a date...."/>
            </p>
            <p className="control">
              <button className="button is-light is-medium is-outlined is-rounded">
                Reset
              </button>
            </p>
        </div>
      </form>
    )
  }
}


export default Datepicker;
