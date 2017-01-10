import React, { PropTypes } from 'react'
import Day from '_components/Day'
import Today from '_components/Today'

export default function Place (props) {
  console.log('Place: ', props.place)
  const placeName = props.place.lat 
    ? props.place.placeName +': '+ props.place.lat +', '+ props.place.lng
    : props.place.placeName
  const removeHandler = props.removeHandler.bind(null, props.place.placeID)
  const btnDel = <button onClick={removeHandler}>Delete</button>
  let daysList = null
  if(props.place.weather){
    daysList = props.place.weather.daily.data.map((day, i) => {
      if(i === 0){
        return <Today key={i} day={props.place.weather.currently} />
      } else {
        return <Day key={i} day={day} />
      }
    })
  }
  console.log('daysList', daysList)

  return (
    <article>
      <div>{placeName}</div>
      {daysList}
      {props.place.placeID === 0 ? null : btnDel}
    </article>
  )
}

Place.propTypes = {
  place: PropTypes.object.isRequired,
  viewport: PropTypes.object.isRequired,
  removeHandler: PropTypes.func.isRequired
}
