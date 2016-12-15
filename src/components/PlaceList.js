import React, { PropTypes } from 'react'
import Place from '_components/Place'

export default function PlaceList (props) {
  const places = props.places.map(((p, i) => {
    return <Place key={i} data={p} clickHandler={props.clickHandler} index={i}/>
  }))
  return (
    <main>
      {places}
    </main>
  )
}

PlaceList.propTypes = {
  places: PropTypes.array,
  clickHandler: PropTypes.func.isRequired
}
