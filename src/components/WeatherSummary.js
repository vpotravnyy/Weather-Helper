import React, { PropTypes } from 'react'

export default function WeatherSummary (props) {

  return(
    <p className="day_summary"> {props.summary} </p>
  )
}

WeatherSummary.propTypes = {
  summary: PropTypes.string.isRequired
}