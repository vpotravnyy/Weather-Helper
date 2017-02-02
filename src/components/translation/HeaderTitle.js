import React from 'react';
import { FormattedMessage, intlShape } from 'react-intl'
import { TITLE } from '_intl/defaultMessages.json'

const HeaderTitle = () => {
  return (
    <FormattedMessage { ...TITLE } />
  )
}

export default HeaderTitle