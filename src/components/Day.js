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

export default function Day (props) {
  const day = props.day
  const time = moment(day.time * 1000)
  const dayOfWeek = time.isSame(moment(), 'day')
   ? time.calendar().split(' ')[0]
   : time.format("ddd")
  const formatStr = props.daily ? "DD.MM" : "HH:mm"
  const dateOrTime = time.format(formatStr)
  let expandCollapseIcon = null
  if(props.expanded) expandCollapseIcon = <CollapseIcon/>
  else if(props.onClick) expandCollapseIcon = <ExpandIcon/>
  const style = props.onClick || !props.daily ? { cursor: 'pointer' } : {}

  return(
    <div>
      <div className="day_wrapper" onClick={props.onClick} style={style} >
        <WeatherSummary summary={day.summary} />
        <div className="day clearfix">
          <CalendarDay dayOfWeek={dayOfWeek} dateOrTime={dateOrTime} />
          <WeatherIcons iconName={day.icon} />
          <Temperature day={day} daily={props.daily} />
          <WindAndPrecip day={day} />
        </div>
        {props.daily && expandCollapseIcon}
      </div>
      { props.expanded && <Hourly day={day.time} hourly={props.hourly} /> }
    </div>
  )
}

Day.propTypes = {
  day: PropTypes.object.isRequired,
  expanded: PropTypes.bool,
  onClick: PropTypes.func,
  daily: PropTypes.bool
}