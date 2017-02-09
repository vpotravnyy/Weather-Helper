import React, { PropTypes } from 'react'
import moment from 'moment'

import Hour from '_components/Hour'
import HourUnits from '_components/HourUnits'
import HourlyIconHeader from '_components/HourlyIconHeader'

import areUnitsInOwnDiv from '_utils/areUnitsInOwnDiv'

export default function Hourly(props) {
  const time = moment.tz(props.day * 1000, props.timezone)
  const hours = props.hourly.data.reduce((memo, item) => {
    const hour = moment.tz(item.time * 1000, props.timezone)
    if (time.isSame(hour, 'day')
      || time.isSame(moment.tz(item.time * 1000 - 1, props.timezone), 'day')) {
      memo.push(
        <Hour
          hour={item}
          key={item.time}
          timezone={props.timezone}
          viewport={props.viewport}
        />
      )
    }
    return memo
  }, [])
  const showUnitsInOwnDiv = areUnitsInOwnDiv(props.viewport)

  return (
    <div className='hourly clearfix'>
      {props.summary && <p className="day__summary"> {props.summary} </p>}
      <HourlyIconHeader precipType={props.precipType} />
      {showUnitsInOwnDiv && <HourUnits />}
      {hours}
    </div>
  )

}

Hourly.propTypes = {
  day: PropTypes.number.isRequired,
  hourly: PropTypes.object.isRequired,
  precipType: PropTypes.string,
  summary: PropTypes.string,
  timezone: PropTypes.string,
  viewport: PropTypes.object.isRequired
}