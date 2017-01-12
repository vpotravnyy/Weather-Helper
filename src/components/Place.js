import React, { PropTypes } from 'react'
import Day from '_components/Day'

export default function Place (props) {
  const placeName = props.place.lat 
    ? props.place.placeName +': '+ props.place.lat +', '+ props.place.lng
    : props.place.placeName
  const removeHandler = props.removeHandler.bind(null, props.place.placeID)
  const btnDel = <button onClick={removeHandler}>Delete</button>
  let daysList = null

  if(props.place.weather){
    daysList = props.place.weather.daily.data.map((day, i) => {
      return <Day key={i} day={day} />
    })
  }

  return (
    <article>
      <div className='place'>{placeName}</div>
      {props.place.placeID === 0 ? null : btnDel}
      <div className='dayslist'>
        {daysList}
      </div>
    </article>
  )
}

Place.propTypes = {
  place: PropTypes.object.isRequired,
  viewport: PropTypes.object.isRequired,
  removeHandler: PropTypes.func.isRequired
}
