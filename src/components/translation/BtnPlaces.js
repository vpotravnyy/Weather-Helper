import React, { PropTypes } from 'react';
import { injectIntl, intlShape } from 'react-intl'
import AddIcon from '_icons/AddIcon'
import { BTN_PLACES } from '_intl/defaultMessages.json'

function BtnPlaces (props) {
  const { formatMessage } = props.intl
  const { showMap, viewport } = props

  if ( viewport.isNormal || viewport.isWide ){
    return (
      <button onClick={showMap} className='header__button'>
        <span> { formatMessage( BTN_PLACES ) } </span>
      </button>
    )
  } else {
    return (
      <button onClick={showMap} className='header__button header__button--with-icon'>
        <AddIcon/>
      </button>
    )
  }
}

BtnPlaces.propTypes = {
  intl: PropTypes.object.isRequired,
  showMap: PropTypes.func.isRequired,
  viewport: PropTypes.object.isRequired
}

export default injectIntl( BtnPlaces )