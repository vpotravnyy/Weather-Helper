import React, { PropTypes } from 'react'
import moment from 'moment'

import IconWeather from '_icons/IconWeather'
import WindArrow from '_icons/WindArrow'
import DropIcon from '_icons/DropIcon'
import PrecipProbabilityIcon from '_icons/PrecipProbabilityIcon'

export default function Day (props) {
  const day = props.day
  const time = day.time * 1000
  const dayOfWeek = moment(time).isSame(moment(), 'day')
   ? moment(time).calendar().split(' ')[0]
   : moment(time).format("ddd")
  const date = moment(time).format("DD.MM")

  return(
    <div className="day_wrapper">
      <p className="day_summary"> {day.summary} </p>
      <div className="day clearfix">
        <div>
          <p className='date'>{dayOfWeek}<br/>{date}</p>
        </div>
        <IconWeather iconName={day.icon} />
        <div>
          <p className='temperature'>
            <span>{Math.round(day.temperatureMax) + ' C°'}</span><br/>
            <span>{Math.round(day.temperatureMin) + ' C°'}</span><br/>
          </p>
        </div>
        <div>
          <p className='wind_and_precip'>
            <WindArrow angle={ Math.round(day.windBearing) } />
            <span> {Math.round(day.windSpeed) + 'm/s'}</span>
            <br/>
            <DropIcon />
            <span> {Math.round(day.precipIntensity) + 'mm'}</span>
            <br/>
            <PrecipProbabilityIcon />
            <span> {Math.round(day.precipProbability * 100) + '%'}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

Day.propTypes = {
  day: PropTypes.object.isRequired
}