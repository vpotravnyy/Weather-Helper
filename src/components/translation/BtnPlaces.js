import React, { PropTypes } from 'react';
import { FormattedMessage, intlShape } from 'react-intl'
import { BTN_PLACES } from '_intl/defaultMessages.json'

function BtnPlaces (props) {

  return (
    <button onClick={props.showMap} className='header__button'>
      <FormattedMessage { ...BTN_PLACES } />
    </button>
  )
}

BtnPlaces.propTypes = {
  showMap: PropTypes.func.isRequired
}

export default BtnPlaces