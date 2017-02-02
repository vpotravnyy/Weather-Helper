import React, { PropTypes } from 'react'
import moment from 'moment'
import { connect } from 'react-redux'

import WeatherIcons from '_icons/WeatherIcons'
import CollapseIcon from '_icons/CollapseIcon'
import ExpandIcon from '_icons/ExpandIcon'

import WeatherSummary from '_components/WeatherSummary'
import CalendarDay from '_components/CalendarDay'
import Temperature from '_components/Temperature'
import WindAndPrecip from '_components/WindAndPrecip'
import Hourly from '_components/Hourly'

import areHoursRenderingWithinDay from '_utils/areHoursRenderingWithinDay'

import Now from '_translation/Now'

function Day (props) {

  const day = props.day
  const time = moment(day.time * 1000)
  let dayOfWeek = time.isSame(moment(), 'day')
   ? time.calendar().split(' ')[0]
   : time.format("ddd")
  dayOfWeek =  props.daily ? dayOfWeek : <Now/>
  const dateOrTime = props.daily ? time.format("DD.MM") : ""
  const style = props.onClick || !props.daily ? { cursor: 'pointer' } : {}

  const expandCollapseIcon = props.onClick
    ? (
        <div className='place__expand-icon place__expand-icon--day'>
          {props.expanded && <CollapseIcon/>}
          {!props.expanded && props.onClick && <ExpandIcon/>}
        </div>
      )
    : null

  let daySummary = null
  if ( !props.viewport.isNormal ) daySummary = <WeatherSummary summary={day.summary} />

  let dayHourly = null
  if ( areHoursRenderingWithinDay(props.expanded, props.viewport) ) {
    dayHourly = <Hourly day={day.time} hourly={props.hourly} viewport={props.viewport} />
  }

  return(
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
            <Temperature day={day} daily={props.daily} />
          </div>
          <div className='day-tile__item day-tile__item-wind_and_precip'>
            <WindAndPrecip day={day} />
          </div>
        </div>
        {props.daily && expandCollapseIcon}
      </div>
      {dayHourly}
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

function mapStateToProps(state){
  return {
    viewport: state.viewport
  }
}

export default connect( mapStateToProps )( Day )