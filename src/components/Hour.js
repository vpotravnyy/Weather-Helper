import React, { PropTypes } from 'react'
import moment from 'moment'
import { connect } from 'react-redux'

import WindArrowIcon from '_icons/WindArrowIcon'

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
  const degree = props.width > 320 ? '°C' : '°'
  const percent = props.width > 320 ? '%' : ''

    return(
      <div className='hour'>
        <div className='block clock'>
          { moment(time * 1000).format("HH") }
        </div>
        <div className='block tmprtr'>
          { Math.round(temperature) + degree }
        </div>
        <div className='block app_tmprtr'>
          { Math.round(apparentTemperature) + degree }
        </div>
        <div className='block wind_bearing'>
          <WindArrowIcon angle={ Math.round(windBearing) } />
        </div>
        <div className='block wind_speed'>
          {
            props.width > 320
             ? <WindSpeedTxt speed={ Math.round(windSpeed) } />
             : <span>{ Math.round(windSpeed) }</span>
          }
        </div>
        <div className='block cloudness'>
          { Math.round(cloudCover * 100) + percent }
        </div>
        <div className='block precip'>
          {
            props.width > 320
             ? <PrecipIntensityTxt intensity={ Math.round(precipIntensity) } />
             : <span>{ Math.round(precipIntensity) }</span>
          }
          
        </div>
        <div className='block precip_probab'>
          { Math.round(precipProbability * 100) + percent }
        </div>
      </div>
    )

}

Hour.propTypes = {
  hour: PropTypes.object.isRequired,
  width: PropTypes.number.isRequired
}

function mapStateToProps (state) {
  return {
    width: state.viewport.width
  }
}

export default connect(mapStateToProps)(Hour)
