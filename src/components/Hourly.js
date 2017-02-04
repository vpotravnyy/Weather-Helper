import React, { PropTypes } from 'react'
import moment from 'moment'

import Hour from '_components/Hour'
import HourUnits from '_components/HourUnits'
import HourlyIconHeader from '_components/HourlyIconHeader'
import WeatherSummary from '_components/WeatherSummary'

import areUnitsInOwnDiv from '_utils/areUnitsInOwnDiv'

export default function Hourly (props) {
  const time = moment(props.day * 1000)
  const hours = props.hourly.data.reduce((memo, item) => {
    const hour = moment(item.time * 1000)
    if( time.isSame(hour, 'day') || time.isSame(moment(item.time * 1000 - 1), 'day') ) {
      memo.push( <Hour key={item.time} hour={item} /> )
    }
    return memo
  }, [])
  const showUnitsInOwnDiv = areUnitsInOwnDiv(props.viewport)

  return(
    <div className='hourly clearfix'>
      {props.summary && <WeatherSummary summary={props.summary} />}
      <HourlyIconHeader precipType={props.precipType} />
      {showUnitsInOwnDiv && <HourUnits />}
      {hours}
    </div>
  )

}

Hourly.propTypes = {
  hourly: PropTypes.object.isRequired,
  viewport: PropTypes.object.isRequired,
  day: PropTypes.number.isRequired,
  precipType: PropTypes.string
}