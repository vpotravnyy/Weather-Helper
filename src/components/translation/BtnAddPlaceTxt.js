import React, { PropTypes } from 'react';
import { FormattedMessage, intlShape } from 'react-intl'

const BtnAddPlaceTxt = () => {
  return (
    <FormattedMessage
      id = "BTN_ADD_PLACE"
      defaultMessage = "Add place"
      description = "Btn 'Add place' label"
    />
  )
}

export default BtnAddPlaceTxt