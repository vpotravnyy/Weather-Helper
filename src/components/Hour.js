import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { FormattedMessage } from 'react-intl'

import { PRECIP_INTENSITY, WIND_SPEED } from '_intl/defaultMessages.json'

import WindArrowIcon from '_icons/WindArrowIcon'

import areUnitsInOwnDiv from '_utils/areUnitsInOwnDiv'

const Hour = (props) => {
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
  const showUnitsInOwnDiv = areUnitsInOwnDiv(props.viewport)
  const degree = showUnitsInOwnDiv ? '' : '°C'
  const percent = showUnitsInOwnDiv ? '' : '%'

  return (
    <div className='hourly__hour'>
      <div className='hourly__cell clock'>
        {moment.tz(time * 1000, props.timezone).format("HH")}
      </div>
      <div className='hourly__cell tmprtr'>
        {Math.round(temperature) + degree}
      </div>
      <div className='hourly__cell app_tmprtr'>
        {Math.round(apparentTemperature) + degree}
      </div>
      <div className='hourly__cell wind_bearing'>
        <WindArrowIcon angle={Math.round(windBearing)} />
      </div>
      <div className='hourly__cell wind_speed'>
        {
          showUnitsInOwnDiv
            ? <span>{Math.round(windSpeed)}</span>
            : <FormattedMessage
                { ...WIND_SPEED }
                values={{
                  speed: Math.round(windSpeed).toString()
                }}
              />
        }
      </div>
      <div className='hourly__cell cloudness'>
        {Math.round(cloudCover * 100) + percent}
      </div>
      <div className='hourly__cell precip'>
        {
          showUnitsInOwnDiv
            ? <span>{Math.round(10 * precipIntensity) / 10}</span>
            : <FormattedMessage
                { ...PRECIP_INTENSITY }
                values={{
                  intensity: (Math.round(10 * precipIntensity) / 10).toString()
                }}
              />
        }
      </div>
      <div className='hourly__cell precip_probab'>
        {Math.round(precipProbability * 100) + percent}
      </div>
    </div>
  )

}

Hour.propTypes = {
  hour: PropTypes.object.isRequired,
  timezone: PropTypes.string.isRequired,
  viewport: PropTypes.object.isRequired
}


export default Hour