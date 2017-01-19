import React, { PropTypes } from 'react'

import WindArrowIcon from '_icons/WindArrowIcon'
import DropIcon from '_icons/DropIcon'
import PrecipProbabilityIcon from '_icons/PrecipProbabilityIcon'

import WindSpeedTxt from '_translation/WindSpeedTxt'
import PrecipIntensityTxt from '_translation/PrecipIntensityTxt'

export default function WindAndPrecip (props) {
  const day = props.day

  return(
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
  )
}

WindAndPrecip.propTypes = {
  day: PropTypes.object.isRequired
}