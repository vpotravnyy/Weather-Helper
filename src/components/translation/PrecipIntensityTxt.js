import React, { PropTypes } from 'react';
import { FormattedMessage, intlShape } from 'react-intl'

const PrecipIntensityTxt = (props) => {
  return (
    <FormattedMessage
      id = "PRECIP_INTENSITY"
      description = "Precipitation Intensity in mm"
      defaultMessage = " {intensity}mm"
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