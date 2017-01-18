import React, { PropTypes } from 'react';
import { injectIntl, intlShape } from 'react-intl'
import AddIcon from '_icons/AddIcon'

const msg = {
  id: "BTN_ADD_PLACE",
  defaultMessage: "Add place",
  description: "Btn 'Add place' message"
}

function BtnAddPlace (props) {
  const { formatMessage } = props.intl
  const { addPlace, width } = props

  if (width > 480){
    return (
      <button className='add' onClick={addPlace}>
        <span> { formatMessage( msg ) } </span>
      </button>
    )
  } else {
    return (
      <button className='add' onClick={confirmAdd}>
        <AddIcon/>
      </button>
    )
  }
  
  function confirmAdd(){
    const cnfrmd = window.confirm( formatMessage( msg ) + "?" )
    if(cnfrmd) addPlace()
  }
}

BtnAddPlace.propTypes = {
  intl: PropTypes.object.isRequired,
  addPlace: PropTypes.func.isRequired,
  width: PropTypes.number.isRequired
}

export default injectIntl( BtnAddPlace )