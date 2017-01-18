import React, { PropTypes } from 'react'
import moment from 'moment'

import WeatherIcons from '_icons/WeatherIcons'
import WindArrowIcon from '_icons/WindArrowIcon'
import DropIcon from '_icons/DropIcon'
import PrecipProbabilityIcon from '_icons/PrecipProbabilityIcon'
import TemperatureIcon from '_icons/TemperatureIcon'
import ApparentTemperatureIcon from '_icons/ApparentTemperatureIcon'
import WindSpeedTxt from '_translation/WindSpeedTxt'
import PrecipIntensityTxt from '_translation/PrecipIntensityTxt'

export default function Now (props) {
  const day = props.day
  const time = day.time * 1000
  const currentDay = moment(time).isSame(moment(), 'day')
   ? moment(time).calendar().split(' ')[0]
   : moment(time).format("ddd")
  const date = moment(time).format("HH:mm")

  return(
    <div className="day_wrapper" onClick={props.onClick}>
      <p className="day_summary"> {day.summary} </p>
      <div className="day clearfix">
        
        <div>
          <p className='date'>{currentDay}<br/>{date}</p>
        </div>
        
        <WeatherIcons iconName={day.icon} />
        
        <div className='temp'>
          <p className='temperature'>
            <span>
              <TemperatureIcon/>
              {Math.round(day.temperature) + ' C°'}
            </span>
            <br/>
            <span>
              <ApparentTemperatureIcon/>
              {Math.round(day.apparentTemperature) + ' C°'}
            </span>
          </p>
        </div>
        
        <div className='wind_precip'>
          <p className='wind_and_precip'>
            
            <WindArrowIcon angle={ Math.round(day.windBearing) } />
            <WindSpeedTxt speed={ Math.round(day.windSpeed) } />
            <br/>

            <DropIcon />
            <PrecipIntensityTxt intensity={ Math.round(day.precipIntensity) } />
            <br/>

            <PrecipProbabilityIcon />
            <span> {Math.round(day.precipProbability * 100) + '%'}</span>
            
          </p>
        </div>
      </div>
    </div>
  )
}

Now.propTypes = {
  day: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
}