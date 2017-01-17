import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { removePlace } from '_actions/actions'

import Day from '_components/Day'
import CurrentPlaceTxt from '_translation/CurrentPlaceTxt'
import BtnDeleteTxt from '_translation/BtnDeleteTxt'

const Place = (props) => {

  const removePlace = props.removePlace.bind(null, props.place.placeID)
  const btnDel = <button onClick={removePlace}> <BtnDeleteTxt /> </button>
  
  let daysList = null
  if(props.place.weather){
    daysList = props.place.weather.daily.data.map((day) => {
      return <Day key={day.time} day={day} />
    })
  }

  return (
    <article>
      
      <div className='place'>
        {
          props.place.placeName === "Current position"
          ? <CurrentPlaceTxt />
          : props.place.placeName
        }
      </div>

      {props.place.placeID === 0 ? null : btnDel}
      
      <div className='dayslist'>
        {daysList}
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
    removePlace: (place) => dispatch(removePlace(place))
  }
}

export default connect( null, mapDispatchToProps )( Place )
