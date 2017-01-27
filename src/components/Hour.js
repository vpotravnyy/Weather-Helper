import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

import WindArrowIcon from '_icons/WindArrowIcon'

import isHourBriefView from '_utils/isHourBriefView'

import WindSpeedTxt from '_translation/WindSpeedTxt'
import PrecipIntensityTxt from '_translation/PrecipIntensityTxt'

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
  const isBrief = isHourBriefView(props.viewport)
  const degree = isBrief ? '' : '°C'
  const percent = isBrief ? '' : '%'

    return(
      <div className='hourly__hour'>
        <div className='hourly__cell clock'>
          { moment(time * 1000).format("HH") }
        </div>
        <div className='hourly__cell tmprtr'>
          { Math.round(temperature) + degree }
        </div>
        <div className='hourly__cell app_tmprtr'>
          { Math.round(apparentTemperature) + degree }
        </div>
        <div className='hourly__cell wind_bearing'>
          <WindArrowIcon angle={ Math.round(windBearing) } />
        </div>
        <div className='hourly__cell wind_speed'>
          {
            isBrief
             ? <span>{ Math.round(windSpeed) }</span>
             : <WindSpeedTxt speed={ Math.round(windSpeed) } />
          }
        </div>
        <div className='hourly__cell cloudness'>
          { Math.round(cloudCover * 100) + percent }
        </div>
        <div className='hourly__cell precip'>
          {
            isBrief
             ? <span>{ Math.round(precipIntensity) }</span>
             : <PrecipIntensityTxt intensity={ Math.round(precipIntensity) } />
          }
        </div>
        <div className='hourly__cell precip_probab'>
          { Math.round(precipProbability * 100) + percent }
        </div>
      </div>
    )

}

Hour.propTypes = {
  hour: PropTypes.object.isRequired,
  viewport: PropTypes.object.isRequired
}

function mapStateToProps (state) {
  return {
    viewport: state.viewport
  }
}

export default connect(mapStateToProps)(Hour)
