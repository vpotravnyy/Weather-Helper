import React, { PropTypes } from 'react'

import WindArrowIcon from '_icons/WindArrowIcon'
import DropIcon from '_icons/DropIcon'
import SnowIcon from '_icons/SnowIcon'
import PrecipProbabilityIcon from '_icons/PrecipProbabilityIcon'

import { FormattedMessage } from 'react-intl'
import { PRECIP_INTENSITY, WIND_SPEED } from '_intl/defaultMessages.json'

export default function WindAndPrecip (props) {
  const { day, viewport } = props

  return(
    <p className='day-tile__item__content day-tile__item-wind_and_precip__content' >
      <WindArrowIcon angle={ day.windBearing } />
      {
        viewport.isVeryNarrow
          ? <span> { Math.round(day.windSpeed) }</span>
          : <FormattedMessage
              { ...WIND_SPEED }
              values = {{
                speed: Math.round(day.windSpeed).toString()
              }}
            />
      }
      <br/>
      { day.precipType === "snow" ? <SnowIcon /> : <DropIcon /> }
      {
        viewport.isVeryNarrow
          ? <span> { Math.round(10 * day.precipIntensity)/10 }</span>
          : <FormattedMessage
              { ...PRECIP_INTENSITY }
              values = {{
                intensity: ( Math.round(10 * day.precipIntensity)/10 ).toString()
              }}
            />
      }
      <br/>
      <PrecipProbabilityIcon />
      {
        viewport.isVeryNarrow
          ? <span> {Math.round(day.precipProbability * 100) }</span>
          : <span> {Math.round(day.precipProbability * 100) + '%'}</span>
      }
    </p>
  )
}

WindAndPrecip.propTypes = {
  day: PropTypes.object.isRequired,
  viewport: PropTypes.object.isRequired
}