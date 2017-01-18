import React from 'react';
import { FormattedMessage, intlShape } from 'react-intl'

const HeaderTitle = () => {
  return (
    <FormattedMessage
      id = "TITLE"
      defaultMessage = "My Weather"
      description = "Title of the header"
    />
  )
}

export default HeaderTitle