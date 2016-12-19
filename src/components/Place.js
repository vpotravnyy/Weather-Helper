import React, { PropTypes } from 'react'

export default function Place (props) {
  const clickHandler = props.clickHandler.bind(null, props.data.place)
  const btnDel = <button onClick={clickHandler}>Delete</button>
  
  return (
    <article>
      <p>{props.data.place}</p>
      <p>lat: {props.data.lat}</p>
      <p>lng: {props.data.lng}</p>
      {props.index === 0 ? null : btnDel}
    </article>
  )
}

Place.propTypes = {
  data: PropTypes.any,
  clickHandler: PropTypes.func.isRequired
}
