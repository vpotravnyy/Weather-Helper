import React, { PropTypes } from 'react';
import { FormattedMessage, intlShape } from 'react-intl'

const WindSpeedTxt = (props) => {
  return (
    <FormattedMessage
      id = "WIND_SPEED"
      description = "WindSpeed in m/s"
      defaultMessage = " {speed}m/s"
      values = {{
        speed: props.speed.toString()
      }}
    />
  )
}

WindSpeedTxt.propTypes = {
  speed: PropTypes.number.isRequired
}

export default WindSpeedTxt