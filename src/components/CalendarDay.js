import React, { PropTypes } from 'react'

export default function CalendarDay (props) {

  return(
    <div>
      <p className='date'>{props.dayOfWeek}<br/>{props.dateOrTime}</p>
    </div>
  )
}

CalendarDay.propTypes = {
  dayOfWeek: PropTypes.string.isRequired,
  dateOrTime: PropTypes.string.isRequired
}