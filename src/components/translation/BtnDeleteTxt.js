import React, { PropTypes } from 'react';
import { FormattedMessage, intlShape } from 'react-intl'

const BtnDeleteTxt = () => {
  return (
    <FormattedMessage
      id = "BTN_REMOVE"
      description = "Btn 'Remove' label"
      defaultMessage = "Remove"
    />
  )
}

export default BtnDeleteTxt