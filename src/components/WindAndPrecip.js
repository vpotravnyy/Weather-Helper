import React, { PropTypes } from 'react'

import WindArrowIcon from '_icons/WindArrowIcon'
import DropIcon from '_icons/DropIcon'
import PrecipProbabilityIcon from '_icons/PrecipProbabilityIcon'

import WindSpeedTxt from '_translation/WindSpeedTxt'
import PrecipIntensityTxt from '_translation/PrecipIntensityTxt'

export default function WindAndPrecip (props) {
  const day = props.day

  return(
    <p className='day-tile__item__content day-tile__item-wind_and_precip__content'>
      
      <WindArrowIcon angle={ Math.round(day.windBearing) } />
      <WindSpeedTxt speed={ Math.round(day.windSpeed) } />
      <br/>

      <DropIcon />
      <PrecipIntensityTxt intensity={ Math.round(day.precipIntensity) } />
      <br/>

      <PrecipProbabilityIcon />
      <span> {Math.round(day.precipProbability * 100) + '%'}</span>
      
    </p>
  )
}

WindAndPrecip.propTypes = {
  day: PropTypes.object.isRequired
}