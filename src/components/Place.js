import React, { PropTypes } from 'react'

export default function Place (props) {
  const removeHandler = props.removeHandler.bind(null, props.place.placeID)
  const btnDel = <button onClick={removeHandler}>Delete</button>
  
  return (
    <article>
      <p>{props.place.place}</p>
      <p>lat: {props.place.lat}</p>
      <p>lng: {props.place.lng}</p>
      {props.place.placeID === 0 ? null : btnDel}
    </article>
  )
}

Place.propTypes = {
  place: PropTypes.object.isRequired,
  removeHandler: PropTypes.func.isRequired
}
