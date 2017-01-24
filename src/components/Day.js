import React, { PropTypes } from 'react'
import moment from 'moment'

import WeatherIcons from '_icons/WeatherIcons'
import CollapseIcon from '_icons/CollapseIcon'
import ExpandIcon from '_icons/ExpandIcon'

import WeatherSummary from '_components/WeatherSummary'
import CalendarDay from '_components/CalendarDay'
import Temperature from '_components/Temperature'
import WindAndPrecip from '_components/WindAndPrecip'
import Hourly from '_components/Hourly'

function Day (props) {

  const day = props.day
  const time = moment(day.time * 1000)
  const dayOfWeek = time.isSame(moment(), 'day')
   ? time.calendar().split(' ')[0]
   : time.format("ddd")
  const formatStr = props.daily ? "DD.MM" : "HH:mm"
  const dateOrTime = time.format(formatStr)
  const expandCollapseIcon = (
    <div className='place__expand-icon place__expand-icon--day'>
      {props.expanded && <CollapseIcon/>}
      {!props.expanded && props.onClick && <ExpandIcon/>}
    </div>
  )
  const style = props.onClick || !props.daily ? { cursor: 'pointer' } : {}

  return(
    <div>
      <div className="day" onClick={props.onClick} style={style} >
        <WeatherSummary summary={day.summary} />
        <div className="day-tile clearfix">
          <div className='day-tile__item day-tile__item-date'>
            <CalendarDay dayOfWeek={dayOfWeek} dateOrTime={dateOrTime} />
          </div>
          <div className='day-tile__item day-tile__item-weather_icon'>
            <WeatherIcons iconName={day.icon} />
          </div>
          <div className='day-tile__item day-tile__item-temperature'>
            <Temperature day={day} daily={props.daily} />
          </div>
          <div className='day-tile__item day-tile__item-wind_and_precip'>
            <WindAndPrecip day={day} />
          </div>
        </div>
        {props.daily && expandCollapseIcon}
      </div>
      { props.expanded && <Hourly day={day.time} hourly={props.hourly} /> }
    </div>
  )
}

Day.propTypes = {
  day: PropTypes.object.isRequired,
  viewport: PropTypes.object.isRequired,
  expanded: PropTypes.bool,
  onClick: PropTypes.func,
  daily: PropTypes.bool
}