import React, { PropTypes } from 'react'

import Day from '_components/Day'
import CurrentPlaceTxt from '_translation/CurrentPlaceTxt'
import BtnDeleteTxt from '_translation/BtnDeleteTxt'

const Place = (props) => {

  const placeName = props.place.lat && props.place.lng && props.place.placeName === "Current position"
    ? props.place.placeName +': '+ props.place.lat +', '+ props.place.lng
    : props.place.placeName
  
  const removeHandler = props.removeHandler.bind(null, props.place.placeID)
  const btnDel = <button onClick={removeHandler}> <BtnDeleteTxt /> </button>
  
  let daysList = null
  if(props.place.weather){
    daysList = props.place.weather.daily.data.map((day) => {
      return <Day key={day.time} day={day} />
    })
  }

  return (
    <article>
      <div className='place'>{
        props.place.placeName === "Current position"
         ? <CurrentPlaceTxt />
         : props.place.placeName
      }</div>
      {props.place.placeID === 0 ? null : btnDel}
      <div className='dayslist'>
        {daysList}
      </div>
    </article>
  )
}

Place.propTypes = {
  place: PropTypes.object.isRequired,
  removeHandler: PropTypes.func.isRequired
}

export default Place