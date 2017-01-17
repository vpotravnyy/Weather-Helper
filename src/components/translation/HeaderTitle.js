import React, { PropTypes } from 'react';
import { FormattedMessage, intlShape } from 'react-intl'

const HeaderTitle = () => {
  return (
    <FormattedMessage
      id = "TITLE"
      defaultMessage = "Weather Helper"
      description = "Title of the header"
    />
  )
}

export default HeaderTitle