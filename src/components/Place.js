import React, { PropTypes } from 'react'

export default function Place (props) {
  const clickHandler = props.clickHandler.bind(null, props.index)
  const btnDel = <button onClick={clickHandler}>Delete</button>
  
  return (
    <article>
      {props.data}
      {props.index === 0 ? null : btnDel}
    </article>
  )
}

Place.propTypes = {
  data: PropTypes.any,
  clickHandler: PropTypes.func.isRequired
}
