import React from 'react';
import { FormattedMessage, intlShape } from 'react-intl'
import { CURRENT_POSITION } from '_intl/defaultMessages.json'

const CurrentPlaceTxt = () => {
  return (
    <FormattedMessage { ...CURRENT_POSITION } />
  )
}

export default CurrentPlaceTxt