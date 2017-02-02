import React from 'react';
import { FormattedMessage, intlShape } from 'react-intl'
import { NOW } from '_intl/defaultMessages.json'

const Now = () => {
  return (
    <FormattedMessage { ...NOW } />
  )
}

export default Now