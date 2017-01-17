import React, { PropTypes } from 'react';
import { FormattedMessage, intlShape } from 'react-intl'

const CurrentPlaceTxt = () => {
  return (
    <FormattedMessage
      id = "CURRENT_POSITION"
      defaultMessage = "Current position"
      description = "Title of the day article"
    />
  )
}

export default CurrentPlaceTxt