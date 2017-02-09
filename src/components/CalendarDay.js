import React, { PropTypes } from 'react'

export default function CalendarDay(props) {

  return (
    <p className='day-tile__item__content day-tile__item-date__content'>
      {props.dayOfWeek}
      <br />
      {props.dateOrTime}
    </p>
  )

}

CalendarDay.propTypes = {
  dayOfWeek: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]).isRequired,
  dateOrTime: PropTypes.string.isRequired
}