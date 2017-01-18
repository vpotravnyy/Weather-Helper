import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { removePlace } from '_actions/actions'
import { expandPlace, collapsePlace } from '_actions/expandPlace'

import Day from '_components/Day'
import Now from '_components/Now'
import CurrentPlaceTxt from '_translation/CurrentPlaceTxt'
import BtnDeleteTxt from '_translation/BtnDeleteTxt'
import CollapseIcon from '_icons/CollapseIcon'
import ExpandIcon from '_icons/ExpandIcon'

const Place = (props) => {
  const removePlace = props.removePlace.bind(null, props.place.placeID)
  const btnDel = <button onClick={removePlace}> <BtnDeleteTxt /> </button>
  const placeName = props.place.placeName === "Current position"
    ? <CurrentPlaceTxt /> : props.place.placeName

  let expandIcon, expandHanler
  if( props.place.isExpanded ){
    expandIcon = <CollapseIcon/>
    expandHanler = props.collapsePlace
  } else {
    expandIcon = <ExpandIcon/>
    expandHanler = props.expandPlace.bind(null, props.place.placeID)
  }
  
  let children = null
  if(props.place.weather){
    if( props.place.isExpanded ) {
      children = props.place.weather.daily.data.map((day) => {
        return <Day key={day.time} day={day} />
      })
    } else {
      const curr = props.place.weather.currently
      children = <Now key={curr.time} day={curr} onClick={expandHanler} />
    }
  }

  return (
    <article>
      
      <div className='place' onClick={expandHanler}>
        { placeName }
        { expandIcon }
      </div>

      {props.place.placeID === 0 ? null : btnDel}
      
      <div className='dayslist'>
        {children}
      </div>

    </article>
  )
}

Place.propTypes = {
  place: PropTypes.object.isRequired,
  removePlace: PropTypes.func.isRequired
}

function mapDispatchToProps (dispatch) {
  return {
    removePlace: (place) => dispatch(removePlace(place)),
    expandPlace: (placeID) => dispatch(expandPlace(placeID)),
    collapsePlace: () => dispatch(collapsePlace())
  }
}

export default connect( null, mapDispatchToProps )( Place )
