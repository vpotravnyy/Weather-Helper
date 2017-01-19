import React, { PropTypes } from 'react'

import TemperatureIcon from '_icons/TemperatureIcon'
import ApparentTemperatureIcon from '_icons/ApparentTemperatureIcon'

export default function Temperature (props) {
  const day = props.day

  if( props.daily ){

    return(
      <div className='temp'>
        <p className='temperature'>
          <span>{Math.round(day.temperatureMax) + '°C'}</span><br/>
          <span>{Math.round(day.temperatureMin) + '°C'}</span><br/>
        </p>
      </div>
    )

  } else {

    return (
      <div className='temp'>
        <p className='temperature'>
          <span>
            <TemperatureIcon/>
            {Math.round(day.temperature) + '°C'}
          </span>
          <br/>
          <span>
            <ApparentTemperatureIcon/>
            {Math.round(day.apparentTemperature) + '°C'}
          </span>
        </p>
      </div>
    )

  }
}

Temperature.propTypes = {
  day: PropTypes.object.isRequired
}