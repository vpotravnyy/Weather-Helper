import React, { PropTypes } from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'

import WeatherIcons from '_icons/WeatherIcons'
import CollapseIcon from '_icons/CollapseIcon'
import ExpandIcon from '_icons/ExpandIcon'

import CalendarDay from '_components/CalendarDay'
import Temperature from '_components/Temperature'
import WindAndPrecip from '_components/WindAndPrecip'
import Hourly from '_components/Hourly'

import areHoursRenderingWithinDay from '_utils/areHoursRenderingWithinDay'

import { NOW } from '_intl/defaultMessages.json'

function Day(props) {

  const day = props.day
  const time = moment.tz(day.time * 1000, props.timezone)
  const dayOfWeek = !props.daily
    ? <FormattedMessage { ...NOW } />
    : time.isSame(moment(), 'day')
      ? time.calendar().split(' ')[0]
      : time.format("ddd")
  const dateOrTime = props.daily ? time.format("DD.MM") : ""
  const style = props.onClick || !props.daily ? { cursor: 'pointer' } : null

  const expandCollapseIcon = props.onClick
    ? (
      <div className='place__expand-icon place__expand-icon--day'>
        {props.expanded && <CollapseIcon />}
        {!props.expanded && props.onClick && <ExpandIcon />}
      </div>
    )
    : null

  let daySummary = null
  if (areHoursRenderingWithinDay(props.viewport)) {
    daySummary = <p className="day__summary"> {day.summary} </p>
  }

  let dayHourly = null
  if (areHoursRenderingWithinDay(props.viewport) && props.expanded) {
    dayHourly = (
      <Hourly
        day={day.time}
        timezone={props.timezone}
        hourly={props.hourly}
        viewport={props.viewport}
        precipType={day.precipType}
      />
    )
  }

  return (
    <div className="day_wrapper clearfix">
      <div className="day" onClick={props.onClick} style={style} >
        {daySummary}
        <div className="day-tile clearfix">
          <div className='day-tile__item day-tile__item-date'>
            <CalendarDay dayOfWeek={dayOfWeek} dateOrTime={dateOrTime} />
          </div>
          <div className='day-tile__item day-tile__item-weather_icon'>
            <WeatherIcons iconName={day.icon} />
          </div>
          <div className='day-tile__item day-tile__item-temperature'>
            <Temperature day={day} daily={props.daily} viewport={props.viewport} />
          </div>
          <div className='day-tile__item day-tile__item-wind_and_precip'>
            <WindAndPrecip day={day} viewport={props.viewport} />
          </div>
        </div>
        {props.daily && expandCollapseIcon}
      </div>
      {dayHourly}
    </div>
  )
}

Day.propTypes = {
  daily: PropTypes.bool,
  day: PropTypes.object.isRequired,
  expanded: PropTypes.bool,
  hourly: PropTypes.object,
  onClick: PropTypes.func,
  timezone: PropTypes.string.isRequired,
  viewport: PropTypes.object.isRequired
}

export default Day