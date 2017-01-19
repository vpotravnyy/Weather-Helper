import React, { PropTypes } from 'react'
import moment from 'moment'

import WeatherIcons from '_icons/WeatherIcons'
import CollapseIcon from '_icons/CollapseIcon'
import ExpandIcon from '_icons/ExpandIcon'

import WeatherSummary from '_components/WeatherSummary'
import CalendarDay from '_components/CalendarDay'
import Temperature from '_components/Temperature'
import WindAndPrecip from '_components/WindAndPrecip'

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

  return(
    <div className="day_wrapper" onClick={props.onClick} >
      <WeatherSummary summary={day.summary} />
      <div className="day clearfix">
        <CalendarDay dayOfWeek={dayOfWeek} dateOrTime={dateOrTime} />
        <WeatherIcons iconName={day.icon} />
        <Temperature day={day} daily={props.daily} />
        <WindAndPrecip day={day} />
      </div>
      {expandCollapseIcon}
    </div>
  )
}

Day.propTypes = {
  day: PropTypes.object.isRequired,
  expanded: PropTypes.bool,
  onClick: PropTypes.func,
  daily: PropTypes.bool
}