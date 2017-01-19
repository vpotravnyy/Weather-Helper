import React, { PropTypes } from 'react'
import moment from 'moment'

export default function Hourly (props) {
  const hours = null

  return(
    <div className='hourly'>
      <HourlyIconHeader/>
      {hours}
    </div>
  )

}

Hourly.propTypes = {
  hourly: PropTypes.object.isRequired,
  day: PropTypes.number.isRequired
}