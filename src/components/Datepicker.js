import React from 'react'

const Datepicker = (props) =>
  <form>
    <div className="field is-grouped is-grouped-centered" style ={{marginTop:40}}>
        <p className="control">
          <input className="input is-rounded is-medium is-outlined" placeholder="Insert a date...."/>
        </p>
        <p className="control">
          <button className="button is-light is-medium is-outlined is-rounded">
            Reset
          </button>
        </p>
    </div>
  </form>


export default Datepicker;
