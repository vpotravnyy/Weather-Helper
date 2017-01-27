import React, { PropTypes } from 'react';
import { injectIntl, intlShape } from 'react-intl'
import AddIcon from '_icons/AddIcon'

const msg = {
  id: "BTN_PLACES",
  defaultMessage: "Places",
  description: "Btn 'Places' message"
}

function BtnPlaces (props) {
  const { formatMessage } = props.intl
  const { changePlaces, viewport } = props

  if ( viewport.isNormal || viewport.isWide ){
    return (
      <button onClick={changePlaces} className='header__button'>
        <span> { formatMessage( msg ) } </span>
      </button>
    )
  } else {
    return (
      <button onClick={changePlaces} className='header__button header__button--with-icon'>
        <AddIcon/>
      </button>
    )
  }
}

BtnPlaces.propTypes = {
  intl: PropTypes.object.isRequired,
  changePlaces: PropTypes.func.isRequired,
  viewport: PropTypes.object.isRequired
}

export default injectIntl( BtnPlaces )