import React from 'react'

const Controls = ({isPaused, onPausedToggle}) =>
<div className="field is-grouped is-grouped-centered">
    <p className="control">
        <button className="button is-outlined is-large is-danger is-rounded" disabled={isPaused} onClick={onPausedToggle}>
          Pause
        </button>
      </p>
      <p className="control">
        <button className="button is-outlined is-large is-success is-rounded" disabled={!isPaused} onClick={onPausedToggle}>
          Resume
        </button>
      </p>
</div>

export default Controls;
