import React from 'react'
import moment from 'moment'

class Datepicker extends React.Component {
  state = {
    date:"",
    valid:true,
    dirty: false
  }

  handleDateChange({target:{value}}) {
    const date = moment(value)

    this.setState({
      date:value,
      valid: date.isValid() && date.isAfter(moment()),
      dirty:true
    })
  }

  handleDateSubmit(event) {
    event.preventDefault();

    const {valid, date} = this.state

    valid && this.props.onDateReset(moment(date))

  }

  render() {
      let {date,valid,dirty} = this.state,
           classes = 'input is-medium is-rounded is-outlined'

      valid && dirty && (classes += 'is-success')
      !valid && dirty && (classes += 'is-danger')

    return (
      <form onSubmit = {this.handleDateSubmit.bind(this)}>
        <div className="field is-grouped is-grouped-centered" style ={{marginTop:40}}>
            <p className="control">
              <input className={classes} value={date} onChange={this.handleDateChange.bind(this)} placeholder="Insert a date...."/>
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
