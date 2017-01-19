import React, { PropTypes } from 'react'
import moment from 'moment'

import WindArrowIcon from '_icons/WindArrowIcon'

import WindSpeedTxt from '_translation/WindSpeedTxt'
import PrecipIntensityTxt from '_translation/PrecipIntensityTxt'

export default function Hour (props) {
const {
  time,
  precipIntensity,
  precipProbability,
  temperature,
  apparentTemperature,
  windSpeed,
  windBearing,
  cloudCover
} = props.hour

    return(
      <div className='hour'>
        <div className='block clock'>
          { moment(time * 1000).format("HH") }
        </div>
        <div className='block tmprtr'>
          { Math.round(temperature) + '°C' }
        </div>
        <div className='block app_tmprtr'>
          { Math.round(apparentTemperature) + '°C' }
        </div>
        <div className='block wind_bearing'>
          <WindArrowIcon angle={ Math.round(windBearing) } />
        </div>
        <div className='block wind_speed'>
          <WindSpeedTxt speed={ Math.round(windSpeed) } />
        </div>
        <div className='block cloudness'>
          { Math.round(cloudCover * 100) + '%' }
        </div>
        <div className='block precip'>
          <PrecipIntensityTxt intensity={ Math.round(precipIntensity) } />
        </div>
        <div className='block precip_probab'>
          { Math.round(precipProbability * 100) + '%' }
        </div>
      </div>
    )

}

Hour.propTypes = {
  hour: PropTypes.object.isRequired
}