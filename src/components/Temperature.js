import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import TemperatureIcon from '_icons/TemperatureIcon'
import ApparentTemperatureIcon from '_icons/ApparentTemperatureIcon'
import SunIcon from '_icons/SunIcon'
import MoonIcon from '_icons/MoonIcon'

const Temperature = (props) => {
  const day = props.day
  const degree = props.viewport.isVeryNarrow ? '°' : '°C'

  if( props.daily ){

    return(
      <p className='day-tile__item__content day-tile__item-temperature__content'>
        <span>
          <SunIcon />
          {Math.round(day.temperatureMax) + degree}
        </span>
        <br/>
        <span>
          <MoonIcon />
          {Math.round(day.temperatureMin) + degree}
        </span>
      </p>
    )

  } else {

    return (
      <p className='day-tile__item__content day-tile__item-temperature__content'>
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
    )

  }
}

Temperature.propTypes = {
  day: PropTypes.object.isRequired,
  viewport: PropTypes.object.isRequired
}

function mapStateToProps (state) {
  return {
    viewport: state.viewport
  }
}

export default connect(mapStateToProps)(Temperature)
