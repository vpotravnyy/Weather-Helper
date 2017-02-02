import React, { PropTypes } from 'react';
import { FormattedMessage, intlShape } from 'react-intl'
import { WIND_SPEED } from '_intl/defaultMessages.json'

const WindSpeedTxt = (props) => {
  return (
    <FormattedMessage { ...WIND_SPEED }
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