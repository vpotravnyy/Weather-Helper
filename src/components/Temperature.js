import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import TemperatureIcon from '_icons/TemperatureIcon'
import ApparentTemperatureIcon from '_icons/ApparentTemperatureIcon'

const Temperature = (props) => {
  const day = props.day
  const degree = props.width > 320 ? '°C' : '°'

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
            {Math.round(day.temperature) + degree}
          </span>
          <br/>
          <span>
            <ApparentTemperatureIcon/>
            {Math.round(day.apparentTemperature) + degree}
          </span>
        </p>
      </div>
    )

  }
}

Temperature.propTypes = {
  day: PropTypes.object.isRequired,
  width: PropTypes.number.isRequired
}

function mapStateToProps (state) {
  return {
    width: state.viewport.width
  }
}

export default connect(mapStateToProps)(Temperature)
