import React, { PropTypes } from 'react';
import { FormattedMessage, intlShape } from 'react-intl'
import { PRECIP_INTENSITY } from '_intl/defaultMessages.json'

const PrecipIntensityTxt = (props) => {
  return (
    <FormattedMessage { ...PRECIP_INTENSITY }
      values = {{
        intensity: props.intensity.toString()
      }}
    />
  )
}

PrecipIntensityTxt.propTypes = {
  intensity: PropTypes.number.isRequired
}

export default PrecipIntensityTxt