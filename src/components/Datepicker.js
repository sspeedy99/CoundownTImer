import React from 'react'

const Datepicker = (props) =>
<div className="field is-grouped">
  <p className="control is-expanded">
    <input className="input" type="text" placeholder="Find a repository"/>
  </p>
  <p className="control">
    <a className="button is-info">
      Search
    </a>
  </p>
</div>

export default Datepicker;
